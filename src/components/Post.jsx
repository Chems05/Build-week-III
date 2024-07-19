import { useEffect, useState } from "react";
import { Card, Col, Image, Row, Button, Form } from "react-bootstrap";
import { ArrowRepeat, ChatRightText, HandThumbsUp, Send, Pencil, Trash, EmojiSmile, ImageFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const Post = () => {
  const postsArray = useSelector((state) => state.posts.allPosts);
  const [comments, setComments] = useState({});
  const [commentText, setCommentText] = useState("");
  const [selectedPostId, setSelectedPostId] = useState(null);
  const singleUserInfo = useSelector((state) => state.users.singleUser);
  const [showComments, setShowComments] = useState({});

  const fetchComments = async (postId) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjlhMTFlYjhmMDYyYTAwMTVlZTc1YjEiLCJpYXQiOjE3MjEzNzMxNjMsImV4cCI6MTcyMjU4Mjc2M30.fTgWPhWTSCXxvKLeWsr33vT7G-E6NwDRrrB92IGOdCk",
        },
      });

      if (response.ok) {
        const data = await response.json();
        const sortedComments = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setComments((prevComments) => ({
          ...prevComments,
          [postId]: sortedComments.slice(0, 5),
        }));
      } else {
        console.error("Error fetching comments:", response.statusText);
      }
    } catch (error) {
      console.log("Error fetching comments:", error);
    }
  };

  const handleCommentSubmit = async (postId) => {
    if (commentText.trim() === "") {
      console.error("Comment text is empty");
      return;
    }

    const comment = {
      comment: commentText,
      rate: 5,
      elementId: postId,
    };

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjlhMTFlYjhmMDYyYTAwMTVlZTc1YjEiLCJpYXQiOjE3MjEzNzMxNjMsImV4cCI6MTcyMjU4Mjc2M30.fTgWPhWTSCXxvKLeWsr33vT7G-E6NwDRrrB92IGOdCk",
        },
        body: JSON.stringify(comment),
      });
      const responseData = await response.json();
      if (response.ok) {
        setComments((prevComments) => ({
          ...prevComments,
          [postId]: [
            ...(prevComments[postId] || []),
            responseData
          ].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5),
        }));
        setCommentText(""); 
      } else {
        console.error("Error adding comment:", responseData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCommentEdit = async (commentId) => {
    const updatedComment = prompt("Edit your comment:", comments[selectedPostId].find(c => c._id === commentId).comment);
    if (updatedComment !== null) {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjlhMTFlYjhmMDYyYTAwMTVlZTc1YjEiLCJpYXQiOjE3MjEzNzMxNjMsImV4cCI6MTcyMjU4Mjc2M30.fTgWPhWTSCXxvKLeWsr33vT7G-E6NwDRrrB92IGOdCk",
          },
          body: JSON.stringify({ comment: updatedComment }),
        });
        const responseData = await response.json();
        if (response.ok) {
          setComments((prevComments) => ({
            ...prevComments,
            [selectedPostId]: prevComments[selectedPostId].map((c) =>
              c._id === commentId ? responseData : c
            ).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5),
          }));
        } else {
          console.error("Error editing comment:", responseData);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleCommentDelete = async (commentId) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjlhMTFlYjhmMDYyYTAwMTVlZTc1YjEiLCJpYXQiOjE3MjEzNzMxNjMsImV4cCI6MTcyMjU4Mjc2M30.fTgWPhWTSCXxvKLeWsr33vT7G-E6NwDRrrB92IGOdCk",
        },
      });
      if (response.ok) {
        setComments((prevComments) => ({
          ...prevComments,
          [selectedPostId]: prevComments[selectedPostId].filter((c) => c._id !== commentId),
        }));
      } else {
        console.error("Error deleting comment:", response.statusText);
      }
    } catch (error) {
      console.log("Error deleting comment:", error);
    }
  };

  const predefinedComments = ["Vero!", "Ottimo spunto!", "Interesting view", "Concordo!","Bravo!" ];

  useEffect(() => {
    if (selectedPostId) {
      fetchComments(selectedPostId);
    }
  }, [selectedPostId]);

  const toggleComments = (postId) => {
    setShowComments((prevShowComments) => ({
      ...prevShowComments,
      [postId]: !prevShowComments[postId],
    }));
  };

  return (
    <>
      {postsArray
        .slice(-20)
        .reverse()
        .map((post) => (
          <Card key={post._id} className="mt-3">
            <Card.Body>
              <Card.Text>
                <Row>
                  <Col className="d-flex">
                    <Image
                      className="me-2"
                      src={post.user.image}
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                      }}
                    />
                    <div>
                      <p style={{ fontWeight: "bold", fontSize: '15px' }} className="mb-0">
                        {post.user.name} {post.user.surname}
                      </p>
                      <p style={{ fontSize: '13px' }} className="text-secondary">{post.user.title}</p>
                    </div>
                  </Col>
                  <Col className="d-inline-flex justify-content-end">
                    <div style={{ border: "none", fontSize: '14px' }} className="light-blue-button rounded d-inline align-items-center">
                      Segui
                    </div>
                  </Col>
                </Row>
              </Card.Text>
              <Card.Text>{post.text}</Card.Text>
              
              {/* Display the post image if available */}
              {post.image && (
                <img
                  src={post.image}
                  alt="Post Image"
                  style={{ width: "100%", height: "300px", objectFit: "cover" }}
                  className="mb-2"
                />
              )}

              <hr className="mb-1" />
              <Row className="d-flex justify-content-around">
                <Col
                  md={3}
                  className="black-button rounded p-2 d-flex align-items-center justify-content-center"
                  style={{ border: "none" }}
                >
                  <HandThumbsUp className="me-1" />
                  <span style={{ fontSize: '15px' }} className="mt-1">Consiglia</span>
                </Col>
                <Col
                  md={3}
                  className="black-button rounded p-2 d-flex align-items-center justify-content-center"
                  style={{ border: "none" }}
                >
                  <ChatRightText className="me-1" />
                  <span style={{ fontSize: '15px' }} className="mt-1" onClick={() => {
                    setSelectedPostId(post._id);
                    toggleComments(post._id); 
                  }}>Commenta</span>
                </Col>
                <Col
                  md={3}
                  className="black-button rounded p-2 d-flex align-items-center justify-content-center"
                  style={{ border: "none" }}
                >
                  <ArrowRepeat className="me-1" />
                  <span style={{ fontSize: '14px' }} className="mt-1">Diffondi il post</span>
                </Col>
                <Col
                  md={2}
                  className="black-button rounded p-2 d-flex align-items-center justify-content-center"
                  style={{ border: "none" }}
                >
                  <Send className="me-1" />
                  <span style={{ fontSize: '15px' }} className="mt-1">Invia</span>
                </Col>
              </Row>
              {selectedPostId === post._id && showComments[post._id] && (
                <>
                  <div className="d-flex flex-wrap my-2">
                    {predefinedComments.map((comment, index) => (
                      <Button
                        key={index}
                        variant="outline-secondary"
                        className="me-2 mb-2 rounded-pill"
                        onClick={() => setCommentText(comment)}
                        size="sm"
                      >
                        {comment}
                      </Button>
                    ))}
                  </div>
                  <Form onSubmit={(e) => {
                    e.preventDefault();
                    handleCommentSubmit(post._id);
                  }}>
                    <Form.Group className="d-flex align-items-center">
                      <Image
                        src={singleUserInfo.image}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          marginRight: "10px", 
                        }}
                      />
                      <div style={{ position: "relative", flexGrow: 1 }}>
                        <Form.Control
                          type="text"
                          placeholder="Aggiungi un commento..."
                          value={commentText}
                          className="rounded-pill"
                          onChange={(e) => setCommentText(e.target.value)}
                          style={{ paddingRight: "50px" }} 
                        />
                        <div style={{
                          position: "absolute",
                          right: "10px", 
                          top: "50%",
                          transform: "translateY(-50%)",
                          display: "flex",
                          alignItems: "center"
                        }}>
                          <Button variant="" className="me-2 p-0" style={{ fontSize: "18px" }}>
                            <EmojiSmile />
                          </Button>
                          <Button variant="" className="p-0 border-0 bg-tranpsarent text-secondary" style={{ fontSize: "18px" }}>
                            <ImageFill />
                          </Button>
                        </div>
                      </div>
                    </Form.Group>
                  </Form>
                  <div className="mt-3">
                    {comments[post._id] && comments[post._id].map((comment) => (
                      <Card key={comment._id} className="mt-2">
                        <Card.Body>
                          <Card.Text className="d-flex justify-content-between align-items-center">
                            <span>{comment.comment} </span>
                            <div>
                              <Button variant="" onClick={() => handleCommentEdit(comment._id)}>
                                <Pencil />
                              </Button>
                              <Button variant="" onClick={() => handleCommentDelete(comment._id)}>
                                <Trash />
                              </Button>
                            </div>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>
                </>
              )}
            </Card.Body>
          </Card>
        ))}
    </>
  );
};

export default Post;

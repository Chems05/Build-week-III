export const ADD_SINGLE_USER_INFORMATIONS = "ADD_SINGLE_USER_INFORMATIONS";
export const ADD_ALL_USERS_INFORMATIONS = "ADD_ALL_USERS_INFORMATIONS";
export const ADD_EXPERIENCES_TO_ARRAY = "ADD_EXPERIENCES_TO_ARRAY";
export const UPLOAD_PROFILE_IMAGE_REQUEST = "UPLOAD_PROFILE_IMAGE_REQUEST";
export const UPLOAD_PROFILE_IMAGE_SUCCESS = "UPLOAD_PROFILE_IMAGE_SUCCESS";
export const UPLOAD_PROFILE_IMAGE_FAILURE = "UPLOAD_PROFILE_IMAGE_FAILURE";
export const UPDATE_USER_INFO = "UPDATE_USER_INFO";
export const FETCH_EXPERIENCES = 'FETCH_EXPERIENCES';
export const ADD_EXPERIENCE = 'ADD_EXPERIENCE';
export const DELETE_EXPERIENCE = 'DELETE_EXPERIENCE';
export const UPDATE_EXPERIENCE = "UPDATE_EXPERIENCE";


export const POST_NEW_EXPERIENCE = "POST_NEW_EXPERIENCE";



const tokens = {giuseppe:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk5MWI3Mjg3ZmZjYjAwMTU3NGNiNzkiLCJpYXQiOjE3MjEzMTAwNjYsImV4cCI6MTcyMjUxOTY2Nn0.aHoj16XGEUnXPdfaYmFylo4R04WSoEiRgVM-GB0kMdU",
  gianluca:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZDlhMjE5NmQ3YjAwMTVkNmI1MjgiLCJpYXQiOjE3MjEwMzEwNzQsImV4cCI6MTcyMjI0MDY3NH0.mMwvBmTiZudIbjpyQMoPDUFqRKemJEWS1jVMsU6gSOs',
    chems:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk5MWNjODg3ZmZjYjAwMTU3NGNiN2EiLCJpYXQiOjE3MjEzMTA0MDgsImV4cCI6MTcyMjUyMDAwOH0.rqvx0RdnErmfOGtOMVp3ckczUKXtGBuZyYEsa8Qdi90'
}
//fetch che reperisce i dati del "mio profilo"
export const getUserInformation = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        headers: {
          Authorization:
           tokens.giuseppe,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch(addSingleUserInformationAction(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//fetch che reperisce i dati di tutti gli utenti

export const getAllUsersInformations = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        headers: {
          Authorization:
           tokens.giuseppe,
        },
      });
      if (response.ok) {
        const data = await response.json();
        dispatch(addAllUsersInformationsAction(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//fetch che reperisce le esperienze dell'utente in base all'id inserito nella fetch stessa

export const getUserExperiences = (userId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
        headers: {
          Authorization:
           tokens.giuseppe,
        },
      });
      if (response.ok) {
        const data = await response.json();
        dispatch(addExperiencesToArrayAction(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//fetch con metodo post per pubblicare una nuova esperienza
export const postUserExperiences = (userId, experienceData) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
        method: "POST",
        headers: {
          Authorization:
           tokens.giuseppe,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(experienceData),
      });
      if (response.ok) {
        const data = await response.json();
        dispatch(postNewExperienceAction(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//azione che inserisce i dati ottenuti dalla fetch con end-point "/me"
export const addSingleUserInformationAction = (user) => {
  return {
    type: ADD_SINGLE_USER_INFORMATIONS,
    payload: user,
  };
};

export const addAllUsersInformationsAction = (users) => {
  return {
    type: ADD_ALL_USERS_INFORMATIONS,
    payload: users,
  };
};

export const addExperiencesToArrayAction = (experiences) => {
  return {
    type: ADD_EXPERIENCES_TO_ARRAY,
    payload: experiences,
  };
};

//azione per le immagini

export const uploadProfileImage = (userId, imageFile) => {
  return async (dispatch) => {
    dispatch({ type: UPLOAD_PROFILE_IMAGE_REQUEST });
    try {
      const formData = new FormData();
      formData.append('profile', imageFile);

      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`, {
        method: 'POST',
        headers: {
          Authorization: tokens.giuseppe,
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: UPLOAD_PROFILE_IMAGE_SUCCESS, payload: { userId, url: data.image } });
        dispatch(updateUserInfo(userId, { image: data.image }));
      } else {
        throw new Error('Image upload failed');
      }
    } catch (error) {
      dispatch({ type: UPLOAD_PROFILE_IMAGE_FAILURE, payload: error.message });
    }
  };
};

export const updateUserInfo = (userId, newInfo) => {
  return {
    type: UPDATE_USER_INFO,
    payload: { userId, newInfo },
  };
};
export const postNewExperienceAction = (newExperience) => {
  return {
    type: POST_NEW_EXPERIENCE,
    payload: newExperience,
  };
};
const baseURL = "https://striveschool-api.herokuapp.com/api/profile";

export const fetchExperiences = (userId) => async (dispatch) => {
  try {
    const response = await fetch(`${baseURL}/${userId}/experiences`, {
      headers: {
        Authorization: tokens.giuseppe
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch experiences");
    }

    const data = await response.json();
    dispatch({ type: FETCH_EXPERIENCES, payload: data });
  } catch (error) {
    console.error("Error fetching experiences:", error);
  }
};

export const addExperience = (userId, experience) => async (dispatch) => {
  try {
    const response = await fetch(`${baseURL}/${userId}/experiences`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: tokens.giuseppe 
      },
      body: JSON.stringify(experience),
    });

    if (!response.ok) {
      throw new Error("Failed to add experience");
    }

    const data = await response.json();
    dispatch({ type: ADD_EXPERIENCE, payload: data });
  } catch (error) {
    console.error("Error adding experience:", error);
   
  }
};

export const deleteExperience = (userId, experienceId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${baseURL}/${userId}/experiences/${experienceId}`, {
        method: 'DELETE',
        headers: {
          Authorization: tokens.giuseppe 
        },
      });
      if (response.ok) {
        dispatch({
          type: DELETE_EXPERIENCE,
          payload: experienceId,
        });
      }
    } catch (error) {
      console.error('Error deleting experience:', error);
    }
  };
};


export const updateExperience = (userId, experienceId, updatedExperience) => async (dispatch) => {
  try {
    const response = await fetch(`${baseURL}/${userId}/experiences/${experienceId}`, {
      method: "PUT",
      headers: {
        Authorization: tokens.giuseppe,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedExperience),
    });
    const data = await response.json();
    dispatch({ type: UPDATE_EXPERIENCE, payload: { userId, experienceId, updatedExperience: data } });
    dispatch(fetchExperiences(userId));
  } catch (error) {
    console.error("Failed to update experience:", error);
  }
};
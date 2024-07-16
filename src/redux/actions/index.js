export const ADD_SINGLE_USER_INFORMATIONS = "ADD_SINGLE_USER_INFORMATIONS";
export const ADD_ALL_USERS_INFORMATIONS = "ADD_ALL_USERS_INFORMATIONS";
export const ADD_EXPERIENCES_TO_ARRAY = "ADD_EXPERIENCES_TO_ARRAY";
export const UPLOAD_PROFILE_IMAGE_REQUEST = "UPLOAD_PROFILE_IMAGE_REQUEST";
export const UPLOAD_PROFILE_IMAGE_SUCCESS = "UPLOAD_PROFILE_IMAGE_SUCCESS";
export const UPLOAD_PROFILE_IMAGE_FAILURE = "UPLOAD_PROFILE_IMAGE_FAILURE";
export const UPDATE_USER_INFO = "UPDATE_USER_INFO";


//fetch che reperisce i dati del "mio profilo"
export const getUserInformation = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZDlhMjE5NmQ3YjAwMTVkNmI1MjgiLCJpYXQiOjE3MjEwMzEwNzQsImV4cCI6MTcyMjI0MDY3NH0.mMwvBmTiZudIbjpyQMoPDUFqRKemJEWS1jVMsU6gSOs",
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
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZDlhMjE5NmQ3YjAwMTVkNmI1MjgiLCJpYXQiOjE3MjEwMzEwNzQsImV4cCI6MTcyMjI0MDY3NH0.mMwvBmTiZudIbjpyQMoPDUFqRKemJEWS1jVMsU6gSOs",
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

export const getUserExperiences = (userId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZDlhMjE5NmQ3YjAwMTVkNmI1MjgiLCJpYXQiOjE3MjEwMzEwNzQsImV4cCI6MTcyMjI0MDY3NH0.mMwvBmTiZudIbjpyQMoPDUFqRKemJEWS1jVMsU6gSOs",
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

      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZDlhMjE5NmQ3YjAwMTVkNmI1MjgiLCJpYXQiOjE3MjEwMzEwNzQsImV4cCI6MTcyMjI0MDY3NH0.mMwvBmTiZudIbjpyQMoPDUFqRKemJEWS1jVMsU6gSOs`,
          },
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: UPLOAD_PROFILE_IMAGE_SUCCESS, payload: data });

        dispatch(updateUserInfo(userId, data));
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
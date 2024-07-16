export const ADD_SINGLE_USER_INFORMATIONS = "ADD_SINGLE_USER_INFORMATIONS";
export const ADD_ALL_USERS_INFORMATIONS = "ADD_ALL_USERS_INFORMATIONS";
export const ADD_EXPERIENCES_TO_ARRAY = "ADD_EXPERIENCES_TO_ARRAY";
export const POST_NEW_EXPERIENCE = "POST_NEW_EXPERIENCE";
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

//fetch che reperisce le esperienze dell'utente in base all'id inserito nella fetch stessa

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

//fetch con metodo post per pubblicare una nuova esperienza
export const postUserExperiences = (userId, experienceData) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZDlhMjE5NmQ3YjAwMTVkNmI1MjgiLCJpYXQiOjE3MjEwMzEwNzQsImV4cCI6MTcyMjI0MDY3NH0.mMwvBmTiZudIbjpyQMoPDUFqRKemJEWS1jVMsU6gSOs",
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

export const postNewExperienceAction = (newExperience) => {
  return {
    type: POST_NEW_EXPERIENCE,
    payload: newExperience,
  };
};

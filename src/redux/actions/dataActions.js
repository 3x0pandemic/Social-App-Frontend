import {
  SET_RANTS,
  LOADING_DATA,
  LIKE_RANT,
  UNLIKE_RANT,
  DELETE_RANT,
  CLEAR_ERRORS,
  SET_ERRORS,
  POST_RANT,
  LOADING_UI,
  SET_RANT,
  STOP_LOADING_UI,
  SUBMIT_COMMENT
} from "../types";
import axios from "axios";

//Get All Rants
export const getRants = () => dispatch => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/rants")
    .then(res => {
      dispatch({
        type: SET_RANTS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SET_RANTS,
        payload: []
      });
    });
};

export const getRant = rantId => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`/rant/${rantId}`)
    .then(res => {
      dispatch({
        type: SET_RANT,
        payload: res.data
      });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch(err => console.log(err));
};

// Post a Rant
export const postRant = newRant => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/rant", newRant)
    .then(res => {
      dispatch({
        type: POST_RANT,
        payload: res.data
      });
      dispatch(clearErrors());
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

// Like A Rant
export const likeRant = rantId => dispatch => {
  axios
    .get(`/rant/${rantId}/like`)
    .then(res => {
      dispatch({
        type: LIKE_RANT,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
// Unlike A Rant
export const unlikeRant = rantId => dispatch => {
  axios
    .get(`/rant/${rantId}/unlike`)
    .then(res => {
      dispatch({
        type: UNLIKE_RANT,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// Submit A Comment
export const submitComment = (rantId, commentData) => dispatch => {
  axios
    .post(`/rant/${rantId}/comment`, commentData)
    .then(res => {
      dispatch({
        type: SUBMIT_COMMENT,
        payload: res.data
      });
      dispatch(clearErrors());
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

export const deleteRant = rantId => dispatch => {
  axios
    .delete(`/rant/${rantId}`)
    .then(() => {
      dispatch({ type: DELETE_RANT, payload: rantId });
    })
    .catch(err => console.log(err));
};

export const getUserData = userHandle => dispatch => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/user/${userHandle}`)
    .then(res => {
      dispatch({
        type: SET_RANTS,
        payload: res.data.rants
      });
    })
    .catch(() => {
      dispatch({
        type: SET_RANTS,
        payload: null
      });
    });
};

export const clearErrors = () => dispatch => {
  dispatch({ type: CLEAR_ERRORS });
};

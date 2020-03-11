import {
  SET_RANTS,
  LOADING_DATA,
  LIKE_RANT,
  UNLIKE_RANT,
  DELETE_RANT
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

export const deleteRant = rantId => dispatch => {
  axios
    .delete(`/rant/${rantId}`)
    .then(() => {
      dispatch({ type: DELETE_RANT, payload: rantId });
    })
    .catch(err => console.log(err));
};

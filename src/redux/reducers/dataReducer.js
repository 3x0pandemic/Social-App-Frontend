import {
  SET_RANTS,
  LIKE_RANT,
  UNLIKE_RANT,
  DELETE_RANT,
  LOADING_DATA,
  POST_RANT,
  SET_RANT,
  SUBMIT_COMMENT
} from "../types";

const initialState = {
  rants: [],
  rant: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_RANTS:
      return {
        ...state,
        rants: action.payload,
        loading: false
      };
    case SET_RANT:
      return {
        ...state,
        rant: action.payload
      };
    case LIKE_RANT:
    case UNLIKE_RANT:
      let index = state.rants.findIndex(
        rant => rant.rantId === action.payload.rantId
      );
      state.rants[index] = action.payload;
      if (state.rant.rantId === action.payload.rantId) {
        state.rant = action.payload;
      }
      return {
        ...state
      };
    case DELETE_RANT:
      index = state.rants.findIndex(rant => rant.rantId === action.payload);
      state.rants.splice(index, 1);
      return {
        ...state
      };
    case POST_RANT:
      return {
        ...state,
        rants: [action.payload, ...state.rants]
      };
    case SUBMIT_COMMENT:
      return {
        ...state,
        rant: {
          ...state.rant,
          comments: [action.payload, ...state.rant.comments]
        }
      };
    default:
      return state;
  }
}

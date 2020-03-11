import {
  SET_RANTS,
  LIKE_RANT,
  UNLIKE_RANT,
  DELETE_RANT,
  LOADING_DATA
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
    case LIKE_RANT:
    case UNLIKE_RANT:
      let index = state.rants.findIndex(
        rant => rant.rantId === action.payload.rantId
      );
      state.rants[index] = action.payload;
      return {
        ...state
      };
    case DELETE_RANT:
      index = state.rants.findIndex(rant => rant.rantId === action.payload);
      state.rants.splice(index, 1);
      return {
        ...state
      };
    default:
      return state;
  }
}

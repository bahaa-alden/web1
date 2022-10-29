import { state, action } from "./interfaces";

export const postReducer = (state: state, action: action): state => {
  switch (action.type) {
    case "FETCH_SATRT":
      return {
        loading: true,
        error: false,
        post: {},
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        post: action.paylod,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: true,
        post: {},
      };
    default:
      return state;
  }
};

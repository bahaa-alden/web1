import { action, actions } from "../interfaces";
export const INIT_STATE = {
  title: "",
  desc: "",
  price: 0,
  category: "",
  tags: [],
  images: {
    sm: "",
    md: "",
    lg: "",
  },
  quantity: 0,
};
export const formReducer = (state, action: actions) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        [action.paylod.name]: action.paylod?.value,
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

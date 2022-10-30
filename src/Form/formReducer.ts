import { action, actions, ss } from "../interfaces";
export const INIT_STATE: ss = {
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
export const formReducer = (state: ss, action: actions): ss => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        [action.paylod.name]: action.paylod?.value,
      };
    case "FETCH_ERROR":
      return {
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
    default:
      return state;
  }
};

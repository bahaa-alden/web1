import { action, actions, ss, state } from "../interfaces";
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
        [action.paylod.name]: action.paylod.value,
      };
    case "ADD_TAGS":
      return {
        ...state,
        tags: [...state.tags, ...action.paylod.value],
      };
    case "REMOVE_TAG":
      return {
        ...state,
        tags: action.paylod.value,
      };
    case "INCREASE":
      return { ...state, quantity: state.quantity++ };
    case "DECREASE":
      return { ...state, quantity: state.quantity-- };

    default:
      return state;
  }
};

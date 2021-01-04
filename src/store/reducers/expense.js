import { expensesData } from "../../data/data-dummy";
import * as actionTypes from "../actions";

const initialstate = expensesData;

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      const newState = Object.assign([], state);
      newState.push(action.payload);
      return newState;

    case actionTypes.DELETE:
      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
};

export default reducer;

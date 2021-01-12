export const ADD = "ADD_EXPENSE";
export const DELETE = "DELETE_EXPENSE";

export const addExpense = (expense) => {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: ADD,
        payload: expense,
      });
    }, 4000);
  };
};

export const deleteExpense = (idExpense) => {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: DELETE,
        id: idExpense,
      });
    }, 1000);
  };
};

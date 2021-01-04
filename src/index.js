import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import categoryReducer from "./store/reducers/category";
import expensereducer from "./store/reducers/expense";

import "semantic-ui-css/semantic.min.css";

const rootReducer = combineReducers({
  category: categoryReducer,
  expense: expensereducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById("root")
);

reportWebVitals();

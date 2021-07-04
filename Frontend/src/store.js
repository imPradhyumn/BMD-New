import { createStore } from "redux";
import rootReducer from "./reducers/RootReducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { compose } from "redux";

const store = createStore(
  rootReducer,

  applyMiddleware(thunk)
);

export default store;

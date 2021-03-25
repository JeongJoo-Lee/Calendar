import { createStore, combineReducers } from "redux";
import plan from "./modules/plan";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const rootReducer = combineReducers({ plan });
const store = createStore(rootReducer);

export default store;

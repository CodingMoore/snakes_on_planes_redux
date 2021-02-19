import { combineReducers } from "redux";
import masterSnakeListReducer from "./master-snake-List-reducer";
// import masterSnakeListReducer from "./master-snake-List-reducer";

const rootReducer = combineReducers({
  masterSnakeList: masterSnakeListReducer
});

export default rootReducer;

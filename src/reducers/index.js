import { combineReducers } from "redux";
import masterSnakeListReducer from "./master-snake-List-reducer";
import seedReducer from "./seed-reducer";

const rootReducer = combineReducers({
  masterSnakeList: masterSnakeListReducer,
  masterSnakeList: seedReducer
});

export default rootReducer;

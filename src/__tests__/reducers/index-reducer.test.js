import rootReducer from "../../reducers/index";
import { createStore } from "redux";
import masterSnakeListReducer from '../../reducers/master-snake-List-reducer';
import * as c from "../../actions/ActionTypes";

let store = creatStore(rootReducer);

describe("rootReducer", () => {
  
  test("Should return default state if no action type is input", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterSnakeList: {}
    });
  });
})
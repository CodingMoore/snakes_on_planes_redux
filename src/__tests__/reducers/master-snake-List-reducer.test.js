import masterSnakeListReducer from "../../reducers/master-snake-List-reducer";

describe("masterSnakeListReducer", () => {

  let action;
  

  test("Should return the default state if there is no action type passed into the reducer", () => {
    expect(masterSnakeListReducer({}, { type: null})).toEqual({});
  });

});
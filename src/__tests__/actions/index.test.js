import * as actions from "./../../actions";
import * as c from "./../../actions/ActionTypes";

describe("snakes_on_planes actions", () => {

  it("deleteSnake should create an 'ADD_SNAKE' action", () => {
    expect(actions.addSnake({
      species: "Test species",
      nativeTo: "Test nativeTo",
      description: "Test description",
      danger: "Test danger",
      inventory: "Test inventory",
      id: "Test id"
    })).toEqual({
      type: c.ADD_SNAKE,
      species: "Test species",
      nativeTo: "Test nativeTo",
      description: "Test description",
      danger: "Test danger",
      inventory: "Test inventory",
      id: "Test"
    });
  });
});
import masterSnakeListReducer from "../../reducers/master-snake-List-reducer";

describe("masterSnakeListReducer", () => {

  let action;

  const snakeData = {
    species: "Species Test",
    nativeTo: "NativeTo Test",
    description: "Description Test",
    danger: "Danger Test",
    inventory: "Inventory Test",
    id: "ID Test"
  }
  

  test("Should return the default state if there is no action type passed into the reducer", () => {
    expect(masterSnakeListReducer({}, { type: null})).toEqual({});
  });

  test("Should successfully add a new Snake to the masterSnakeList", () => {
    const { species, nativeTo, description, danger, inventory, id } = snakeData;
    action = {
      type: "ADD_SNAKE",
      species,
      nativeTo,
      description,
      danger,
      inventory,
      id
    }
    expect(masterSnakeListReducer({}, action)).toEqual(
      {
        "ID Test": {
        species: "Species Test",
        nativeTo: "NativeTo Test",
        description: "Description Test",
        danger: "Danger Test",
        inventory: "Inventory Test",
        id: "ID Test"
        }
      }
    )
  })

});
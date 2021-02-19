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

  const snakeListData = {
    1: {
    species: "Species 1",
    nativeTo: "NativeTo 1",
    description: "Description 1",
    danger: "Danger 1",
    inventory: "Inventory 1",
    id: 1
    },

    2: {
    species: "Species 2",
    nativeTo: "NativeTo 2",
    description: "Description 2",
    danger: "Danger 2",
    inventory: "Inventory 2",
    id: 2
    }
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
        species,
        nativeTo,
        description,
        danger,
        inventory,
        id
        }
      }
    )
  });

  test("Should successfully delete the specified snake from the masterSnakeList", () => {
    const action = {
      type: "DELETE_SNAKE",
      id: 1
    }
  
    expect(masterSnakeListReducer(snakeListData, action)).toEqual(
      {
        2: {
          species: "Species 2",
          nativeTo: "NativeTo 2",
          description: "Description 2",
          danger: "Danger 2",
          inventory: "Inventory 2",
          id: 2
          }
      }
    )
  })

});
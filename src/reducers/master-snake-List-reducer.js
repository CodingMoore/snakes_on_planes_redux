const initialState = {
  1: {
    species: "Whoop-Asp",
    nativeTo: "Local Watering Holes",
    description: "Have chips on their 'shoulders'",
    danger: "They are only dangerous if you look at them 'funny'.",
    inventory: 144,
    id: "1"
  },
  2: {
    species: "American Plissken",
    nativeTo: "You used to find them in New York and LA",
    description: "Has trouble with depth perception",
    danger: "Highly dangerous (and cynical)",
    inventory: 144,
    id: "2"
  },
  3: {
    species: "(gym)Rat-Snake",
    nativeTo: "Venice Beach",
    description: "'Do you even hiss Broa?'",
    danger: "Lady Killers",
    inventory: 144,
    id: "3"
  },
  4: {
    species: "Kojiman Solid Snake",
    nativeTo: "Cardboard Boxes",
    description: "Can be identified by a grey band on its head",
    danger: "Extreme, known to hunt others of their own kind.",
    inventory: 144,
    id: "4"
  }
}

export default (state = initialState, action) => {

  const { species, nativeTo, description, danger, inventory, id } = action;
  switch (action.type) {
  case "ADD_SNAKE":
    return Object.assign({}, state, {
      [id]: {
        species,
        nativeTo,
        description,
        danger,
        inventory,
        id
      }
    });
  case "DELETE_SNAKE":
    let newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
}
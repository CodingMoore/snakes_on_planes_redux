export default (state = {}, action) => {
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
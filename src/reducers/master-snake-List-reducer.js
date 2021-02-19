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
    return state;
  default:
    return state;
  }
}
export default (state = {}, action) => {
  const { species, nativeTo, description, danger, inventory } = action;
  switch (action.type) {
  case "ADD_SNAKE":
    return Object.assign({}, state, {
      [id]: {
        species,
        nativeTo,
        description,
        danger,
        inventory
      }
    });
  // default:
  //   return state;
  }
}
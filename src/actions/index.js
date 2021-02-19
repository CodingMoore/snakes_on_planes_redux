import * as c from "./ActionTypes";

export const addSnake = (snake) => {
  const { species, nativeTo, description, danger, inventory, id } = snake;
  return {
    type: c.ADD_SNAKE,
    species,
    nativeTo,
    description,
    danger,
    inventory,
    id
  }
};
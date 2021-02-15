import React from "react";
import Snake from "./Snake";
import PropTypes from "prop-types";

function SnakeList(props) {
  
  return (
    <React.Fragment>
      <hr/>
      {props.snakeList.map((snake) => 
        <Snake
          whenSnakeClicked = { props.onSnakeSelection }
          species = {"Species - " + snake.species}
          origin = {"Origin - " + snake.origin}
          temperment = {"Temperment - " + snake.temperment}
          lethality = {"Lethality - " + snake.lethality}
          inventory = {"Inventory - " + snake.inventory}
          id = {snake.id}
          key = {snake.id}/>
        )}
    </React.Fragment>
  );
}

SnakeList.propTypes = {
  snakelist: PropTypes.array,
  onSnakeSelection: PropTypes.func
};

export default SnakeList;
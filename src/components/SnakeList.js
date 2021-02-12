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
          species = {snake.species}
          origin = {snake.origin}
          temperment = {snake.temperment}
          lethality = {snake.lethality}
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
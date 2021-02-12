import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import SnakeForm from "./SnakeForm";

function AddSnake(props) {
  function handleAddSnakeSubmission(event) {
    event.preventDefault();
    props.onNewSnakeCreation({
      species: event.target.species.value,
      origin: event.target.origin.value,
      termperment: event.target.temperment.value,
      lethality: event.target.lethality.value,
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <SnakeForm
        formSubmissionHandler = {handleAddSnakeSubmission}
        buttonText = "Add" />
    </React.Fragment>
  );

}

AddSnake.propType = {
  onNewSnakeCreation: PropTypes.func
};

export default AddSnake;
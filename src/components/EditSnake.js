import React from "react";
import PropTypes from "prop-types";
import SnakeForm from "./SnakeForm";

function EditSnake(props) {
  function handleEditSnakeSubmission(event) {
    event.preventDefault();
    props.onSnakeEdit({
      species: event.target.species.value,
      nativeTo: event.target.nativeTo.value,
      description: event.target.description.value,
      danger: event.target.danger.value
    });
  }
  return (
    <React.Fragment>
      <h1>Edit Snake</h1>
      <SnakeForm
        formSubmissionHandler = {handleEditSnakeSubmission}
        buttonText = "Edit" />
    </React.Fragment>
  );

}

EditSnake.propType = {
  onSnakeEdit: PropTypes.func
};

export default EditSnake;
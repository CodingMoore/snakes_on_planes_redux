import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import SnakeForm from "./SnakeForm";

function AddSnake(props) {
  function handleNewSnakeFformSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
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
      formSubmissionHandler = {handleNewSnakeFormSubmission}
      buttonText = "Add" />
    </React.Fragment>
  );

  AddSnake.propType = {
    onNewSnakeCreation: PropTypes.func
  };
  
}
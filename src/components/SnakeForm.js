import React from "react";
import PropTypes from "prop-types";

function SnakeForm(props) {
  return (
    <React.Fragment>
      <form onSubmit = {props.formSubmissionHandler}>
        <input
          type = "text"
          species = "species"
          placeholder = "Species Name" />
        <input
            type = "text"
            origin = "origin"
            placeholder = "Origin" />
        <input
            type = "text"
            temperment = "temperment"
            placeholder = "Temperment" />
        <input
            type = "text"
            lethality = "lethality"
            placeholder = "Lethality" />
        <button type = "submit"> {props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

SnakeForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default SnakeForm;
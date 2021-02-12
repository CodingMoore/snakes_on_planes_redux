import React from "react";
import PropTypes from "prop-types";

function SnakeForm(props) {
  return (
    <React.Fragment>
      <form onSubmit = {props.formSubmissionHandler}>
        <input
          type = "text"
          name = "species"
          placeholder = "Species Name" />
        <input
          type = "text"
          name = "origin"
          placeholder = "Origin" />
        <input
          type = "text"
          name = "temperment"
          placeholder = "Temperment" />
        <input
          type = "text"
          name = "lethality"
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
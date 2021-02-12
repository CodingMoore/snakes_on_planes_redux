import React from "react";
import Snake from "./Snake";
import PropTypes from "prop-types";

function SnakeList(props) {
  
  return (
    <React.Fragment>

      <Snake />
    </React.Fragment>
  );
}

SnakeList.propTypes = {
  snakelist: PropTypes.array,

};

export default TicketList;
import React from "react";

class SnakeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterSnakeList: []
    };
  }

  //handleTaskFunctions

  handleAddingNewSnakeToList = (newSnake) => {
    const newMasterSnakeList = this.state.masterSnakeList.concat(newSnake);
    this.setState({
      masterSnakeList: newMasterSnakeList,
      formVisibleOnPage: false
    });
  }

  render() {
    //If else conditionals
    let currentlyVisibleState = null;
    let buttonText = null;


    return (
      <React.Fragment>
        {currentlyVisibleState}

      </React.Fragment>  
    );
  }


}

export default SnakeControl;


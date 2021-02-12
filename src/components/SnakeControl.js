import React from "react";6
import SnakeForm from "SnakeForm";
import SnakeList from "SnakeList";


class SnakeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterSnakeList: [],
      selectedSnake: null,
      snakeListVisible: true,
      snakeFormVisible: false,
      snakeDetailsVisible: false
    };
  }

  //handleTaskFunctions

  handleClick = () => {
    if (this.state.snakeListVisible === true && this.state.selectedSnake === null) {
      this.setState({
        snakeListVisible: false,
        snakeFormVisible: true,
        snakeDetailsVisible: false
      });
    } else if (this.state.snakeFormVisible === true && this.state.selectedSnake === null) {
      this.setState({
        snakeListVisible: true,
        snakeFormVisible: false,
        snakeDetailsVisible: false
      });
    } else { //else if (this.state.selectedSnake != null)
      this.setState({
        snakeListVisible: true,
        snakeFormVisible: false,
        snakeDetailsVisible: false,
        selectedSnake: null
      });
    }
  }

  handleAddingNewSnakeToList = (newSnake) => {
    const newMasterSnakeList = this.state.masterSnakeList.concat(newSnake);
    this.setState({
      masterSnakeList: newMasterSnakeList,
      formVisible: false
    });
  }

  handleChangingSelectedSnake = (id) => {
    const selectedSnake = this.state.masterSnakeList.filter(snake => snake.id === id)[0];
    this.setState({selectedSnake: selectedSnake});
  }

  render() {
    //If else conditionals
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.snakeListVisible) {
      currentlyVisibleState = <SnakeList snakeList = {this.state.masterSnakeList} onSnakeSelection = {this.handleChangingSelectedSnake} />;
      buttonText = "Add Snake Species to Inventory";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick = {this.handleClick}>{buttonText}</button>
      </React.Fragment>  
    );
  }


}

export default SnakeControl;


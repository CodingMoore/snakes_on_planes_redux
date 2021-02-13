import React from "react";
import AddSnake from "./AddSnake";
import SnakeList from "./SnakeList";
import SnakeDetails from "./SnakeDetails";


class SnakeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterSnakeList: [],
      selectedSnake: null,
      snakeListVisible: true,
      newSnakeFormVisible: false,
      snakeDetailsVisible: false
    };
  }

  //handleTaskFunctions

  handleClick = () => {
    if (this.state.snakeListVisible === true && this.state.selectedSnake === null) {
      this.setState({
        snakeListVisible: false,
        newSnakeFormVisible: true,
        snakeDetailsVisible: false
      });
    } else if (this.state.newSnakeFormVisible === true && this.state.selectedSnake === null) {
      this.setState({
        snakeListVisible: true,
        newSnakeFormVisible: false,
        snakeDetailsVisible: false
      });
    } else { //else if (this.state.selectedSnake != null)
      this.setState({
        snakeListVisible: true,
        newSnakeFormVisible: false,
        snakeDetailsVisible: false,
        selectedSnake: null
      });
    }
  }

  handleAddingNewSnakeToList = (newSnake) => {
    const newMasterSnakeList = this.state.masterSnakeList.concat(newSnake);
    this.setState({
      masterSnakeList: newMasterSnakeList,
      selectedSnake: null,
      snakeListVisible: true,
      newSnakeFormVisible: false,
      snakeDetailsVisible: false
    });
  }

  handleChangingSelectedSnake = (id) => {
    const selectedSnake = this.state.masterSnakeList.filter(snake => snake.id === id)[0];
    this.setState({
      selectedSnake: selectedSnake,
      snakeListVisible: false,
      newSnakeFormVisible: false,
      snakeDetailsVisible: true
    });
  }

  handleDeletingSnakeFromList = (id) => {
    const newMasterSnakeList = this.state.masterSnakeList.filter(snake => snake.id !== id);
    this.setState({
      masterSnakeList: newMasterSnakeList,
      selectedSnake: null,
      snakeListVisible: true,
      newSnakeFormVisible: false,
      snakeDetailsVisible: false
    });

  }

  render() {
    //If else conditionals
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.snakeListVisible) {
      currentlyVisibleState = <SnakeList snakeList = {this.state.masterSnakeList} onSnakeSelection = {this.handleChangingSelectedSnake} />;
      for (let i = 0; i < this.state.masterSnakeList.length; i++) {
        console.log(this.state.masterSnakeList[i].id);
        console.log(this.state.masterSnakeList.selectedSnake);
      };
      buttonText = "Add Snake Species to Inventory";
    } else if (this.state.selectedSnake != null) {
      currentlyVisibleState =
      <SnakeDetails
      snake = {this.state.selectedSnake} />
      buttonText = "Return to Snake List";
      
    } else if (this.state.newSnakeFormVisible) {
      currentlyVisibleState = <AddSnake onNewSnakeCreation = {this.handleAddingNewSnakeToList} />;
      buttonText = "Return to Ticket List";
    } else {
      
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


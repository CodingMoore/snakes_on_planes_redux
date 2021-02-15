import React from "react";
import AddSnake from "./AddSnake";
import SnakeList from "./SnakeList";
import SnakeDetails from "./SnakeDetails";
import EditSnake from "./EditSnake";


class SnakeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterSnakeList: [],
      selectedSnake: null,
      snakeListVisible: true,
      newSnakeFormVisible: false,
      snakeDetailsVisible: false,
      snakeEditVisible: false
    };
  }

  handleClick = () => {
    if (this.state.snakeListVisible === true) {
      this.setState({
        selectedSnake: null,
        snakeListVisible: false,
        newSnakeFormVisible: true,
        snakeDetailsVisible: false,
        snakeEditVisible: false
      });
    } else if (this.state.newSnakeFormVisible === true) {
      this.setState({
        snakeListVisible: true,
        newSnakeFormVisible: false,
        snakeDetailsVisible: false,
        snakeEditVisible: false
      });
    } else if (this.state.snakeEditVisible) {
      this.setState({
      snakeListVisible: false,
      newSnakeFormVisible: false,
      snakeDetailsVisible: true,
      snakeEditVisible: false
      });
    } else if (this.state.selectedSnake !== null) {
      this.setState({
        snakeListVisible: true,
        newSnakeFormVisible: false,
        snakeDetailsVisible: false,
        snakeEditVisible: false
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
      snakeDetailsVisible: false,
      snakeEditVisible: false
    });
  }

  handleChangingSelectedSnake = (id) => {
    const selectedSnake = this.state.masterSnakeList.filter(snake => snake.id === id)[0];
    this.setState({
      selectedSnake: selectedSnake,
      snakeListVisible: false,
      newSnakeFormVisible: false,
      snakeDetailsVisible: true,
      snakeEditVisible: false
    });
  }

  handleDeletingSnakeFromList = (id) => {
    const newMasterSnakeList = this.state.masterSnakeList.filter(snake => snake.id !== id);
    this.setState({
      masterSnakeList: newMasterSnakeList,
      selectedSnake: null,
      snakeListVisible: true,
      newSnakeFormVisible: false,
      snakeDetailsVisible: false,
      snakeEditVisible: false
    });

  }

  handleEditingSnake = (updatedSnake) => {
    const newMasterSnakeList = this.state.masterSnakeList.filter(snake => snake.id !== this.state.selectedSnake.id).concat(updatedSnake);
    this.setState({
      masterSnakeList: newMasterSnakeList,
      selectedSnake: null,
      snakeListVisible: true,
      newSnakeFormVisible: false,
      snakeDetailsVisible: false,
      snakeEditVisible: false
    })
  }

  handleEditingClick = (id) => {
    this.setState({
      snakeListVisible: false,
      newSnakeFormVisible: false,
      snakeDetailsVisible: false,
      snakeEditVisible: true
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.snakeListVisible) {
      currentlyVisibleState = <SnakeList snakeList = {this.state.masterSnakeList} onSnakeSelection = {this.handleChangingSelectedSnake} />;
      for (let i = 0; i < this.state.masterSnakeList.length; i++) {
        console.log(this.state.masterSnakeList[i].id);
        console.log(this.state.masterSnakeList.selectedSnake);
      };
      buttonText = "Add Snake Species to Inventory";
    } else if (this.state.newSnakeFormVisible) {
      currentlyVisibleState = <AddSnake onNewSnakeCreation = {this.handleAddingNewSnakeToList} />;
      buttonText = "Return to Snake List";
    } else if (this.state.snakeEditVisible) {
      currentlyVisibleState = <EditSnake onSnakeEdit = {this.handleEditingSnake} />;
      buttonText = "Return to Snake Details";
    } else if (this.state.selectedSnake != null) {
      currentlyVisibleState =
      <SnakeDetails
      snake = {this.state.selectedSnake} 
      onClickingDelete = {this.handleDeletingSnakeFromList}
      onClickingEdit = {this.handleEditingClick} />
      buttonText = "Return to Snake List";
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


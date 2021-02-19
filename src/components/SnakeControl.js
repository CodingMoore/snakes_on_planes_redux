import React from "react";
import AddSnake from "./AddSnake";
import SnakeList from "./SnakeList";
import SnakeDetails from "./SnakeDetails";
import EditSnake from "./EditSnake";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as a from "./../actions";

class SnakeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedSnake: null,
      snakeListVisible: true,
      newSnakeFormVisible: false,
      snakeDetailsVisible: false,
      snakeEditVisible: false,
      masterSnakeList: 
      [
        {
          species: "Whoop-Asp",
          nativeTo: "Local Watering Holes",
          description: "Have chips on their 'shoulders'",
          danger: "They are only dangerous if you look at them 'funny'.",
          inventory: 144,
          id: "1"
        },
        {
          species: "American Plissken",
          nativeTo: "You used to find them in New York and LA",
          description: "Has trouble with depth perception",
          danger: "Highly dangerous (and cynical)",
          inventory: 144,
          id: "3"
        },
        {
          species: "(gym)Rat-Snake",
          nativeTo: "Venice Beach",
          description: "'Do you even hiss Broa?'",
          danger: "Lady Killers",
          inventory: 144,
          id: "2"
        },
        {
          species: "Kojiman Solid Snake",
          nativeTo: "Cardboard Boxes",
          description: "Can be identified by a grey band on its head",
          danger: "Extreme, known to hunt others of their own kind.",
          inventory: 144,
          id: "4"
        }
      ]
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
    });
  }

  handleEditingClick = (id) => {
    this.setState({
      snakeListVisible: false,
      newSnakeFormVisible: false,
      snakeDetailsVisible: false,
      snakeEditVisible: true
    });
  }

  handleSnakeRestock = (id) => {
    const lowStockSnake = this.state.masterSnakeList.filter(snake => snake.id === id)[0];
    const { species, nativeTo, description, danger, inventory } = lowStockSnake;
    const restockedSnake = {
      species: species,
      nativeTo: nativeTo,
      description: description,
      danger: danger,
      inventory: inventory + 144,
      id: id
    }
    const newMasterSnakeList = this.state.masterSnakeList.filter(snake => snake.id !== id).concat(restockedSnake);
    this.setState({
      masterSnakeList: newMasterSnakeList
    });
  }

  handleClickingBuy = (id) => {
    const stockSnake = this.state.masterSnakeList.filter(snake => snake.id === id)[0];
    const { species, nativeTo, description, danger, inventory } = stockSnake;
    if(inventory >= 12) {
      const purchasedSnake = {
        species: species,
        nativeTo: nativeTo,
        description: description,
        danger: danger,
        inventory: inventory - 12,
        id: id
      }
      const newMasterSnakeList = this.state.masterSnakeList.filter(snake => snake.id !== id).concat(purchasedSnake);
      this.setState({
        masterSnakeList: newMasterSnakeList
      });
    } else {
      alert(`${species} is out of stock!`);
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.snakeListVisible) {
      currentlyVisibleState = 
      <SnakeList 
      snakeList = {this.state.masterSnakeList} 
      onSnakeSelection = {this.handleChangingSelectedSnake} 
      onClickingBuy = {this.handleClickingBuy} />;
      buttonText = "Add Snake Species to Inventory";
    } else if (this.state.newSnakeFormVisible) {
      currentlyVisibleState =
      <AddSnake 
      onNewSnakeCreation = {this.handleAddingNewSnakeToList} />;
      buttonText = "Return to Snake List";
    } else if (this.state.snakeEditVisible) {
      currentlyVisibleState = 
      <EditSnake 
      onSnakeEdit = {this.handleEditingSnake} />;
      buttonText = "Return to Snake Details";
    } else if (this.state.selectedSnake != null) {
      currentlyVisibleState =
      <SnakeDetails
      snake = {this.state.selectedSnake}
      onClickingRestock = {this.handleSnakeRestock}
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

SnakeControl.propTypes = {
  masterSnakeList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    masterSnakeList: state.masterSnakeList
  }
}

SnakeControl = connect(mapStateToProps)(SnakeControl);

export default SnakeControl;


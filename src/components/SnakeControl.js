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
    this.setState({
      selectedSnake: null,
      snakeListVisible: true,
      newSnakeFormVisible: false,
      snakeDetailsVisible: false,
      snakeEditVisible: false
    });
    const { dispatch } = this.props;
    const action = a.addSnake(newSnake);
    dispatch(action);
  }

  handleChangingSelectedSnake = (id) => {
    const newSelectedSnake = this.props.masterSnakeList[id];
    this.setState({
      selectedSnake: newSelectedSnake,
      snakeListVisible: false,
      newSnakeFormVisible: false,
      snakeDetailsVisible: true,
      snakeEditVisible: false
    });
  }

  handleDeletingSnakeFromList = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteSnake(id);
    dispatch(action);
    this.setState({
      selectedSnake: null,
      snakeListVisible: true,
      newSnakeFormVisible: false,
      snakeDetailsVisible: false,
      snakeEditVisible: false
    });
  }

  handleEditingSnake = (updatedSnake) => {
    this.setState({
      selectedSnake: null,
      snakeListVisible: true,
      newSnakeFormVisible: false,
      snakeDetailsVisible: false,
      snakeEditVisible: false
    });
    const { dispatch } = this.props;
    const action = a.addSnake(updatedSnake);
    dispatch(action);
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
    const lowStockSnake = this.props.masterSnakeList[id];
    const { species, nativeTo, description, danger, inventory } = lowStockSnake;
    const restockedSnake = {
      species: species,
      nativeTo: nativeTo,
      description: description,
      danger: danger,
      inventory: inventory + 144,
      id: id
    }
    const { dispatch } = this.props;
    const action = a.addSnake(restockedSnake);
    dispatch(action);
    this.handleChangingSelectedSnake(this.props.masterSnakeList[id].id);
  }

  handleClickingBuy = (id) => {
    const stockSnake = this.props.masterSnakeList[id];
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
      const { dispatch } = this.props;
      const action = a.addSnake(purchasedSnake);
      dispatch(action);
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
      snakeList = {this.props.masterSnakeList}
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


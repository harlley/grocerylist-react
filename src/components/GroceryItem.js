import React from 'react';

class GroceryItem extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      name: this.props.item.name,
      amountStock: this.props.item.amountStock,
      minimumStock: this.props.item.minimumStock,
      actionsVisible: false
    }
  }

  onClickDescription() {
    this.setState({ actionsVisible: !this.state.actionsVisible });
  }

  onClickDelete() {
    this.props.onDelete(this.state.name);
  }

  onClickMinus() {
    if (this.state.amountStock > 0) {
      const newAmount = this.state.amountStock - 1;
      this.setState({ amountStock: newAmount }, function() {
        this.props.onUpdateItem(this.state);
      });
    }
  }

  onClickPlus() {
    const newAmount = this.state.amountStock + 1;
    this.setState({ amountStock: newAmount}, function() {
      this.props.onUpdateItem(this.state);
    });
  }

  render() {
    const actionsVisibility = this.state.actionsVisible? "" : "hidden";
    const itemStatus = (this.state.amountStock < this.state.minimumStock) ? "hasToBuy" : "";      
    return(
      <div className="item">
        <div  onClick={this.onClickDescription.bind(this)} 
              className={`description ${itemStatus}`}>
          <label>
            {this.state.name} 
            <sup>Min {this.state.minimumStock}</sup>
          </label>
          <span className="amountStock">
            {this.state.amountStock}
          </span>
        </div>
        <div className={`actions ${actionsVisibility}`}>
          <button className="delete" onClick={this.onClickDelete.bind(this)}>
            <img src="images/delete.png" alt=""/>
          </button>
          <button className="minus" onClick={this.onClickMinus.bind(this)}>
            <img src="images/minus.png" alt=""/>
          </button>
          <button className="plus" onClick={this.onClickPlus.bind(this)}>
            <img src="images/plus.png" alt=""/>
          </button>
        </div>
      </div>
    )
  }
}
export default GroceryItem;
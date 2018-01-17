import React from 'react';

class GroceryInputItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      name: "",
      minimumStock: 1,
      amountStock: 0,
      minimumStockVisible: false
    };
  }

  onClickSave() {
    if (this.state.name.length > 0) {
      this.props.onClickSave(this.state);
      this.setState({ name: "" });
      this.setState({ minimumStockVisible: false });
    }
    else {
      alert("Preencha o nome");
    }
  }

  onFocusInput() {
    this.setState({ minimumStockVisible: true });
  }

  onChangeInput(event) {
    this.setState({ name: event.target.value });
  }

  onClickPlus() {
    this.setState({ minimumStock: this.state.minimumStock + 1 });
  }

  onClickMinus() {
    if (this.state.minimumStock > 0) {
      this.setState({ minimumStock: this.state.minimumStock - 1 });
    }
  }
  
  render() {
    const visibility = this.props.visible? "" : "hidden";
    const minimumStockVisibility = this.state.minimumStockVisible? "" : "hidden";
    return (
      <div className={`inputItem ${visibility}`}>
         <div className="itemName">
           <input type="text" 
                  onChange={this.onChangeInput.bind(this)} 
                  value={this.state.name} 
                  onFocus={this.onFocusInput.bind(this)}/>
           <button className="save" onClick={this.onClickSave.bind(this)}>
             <img src="images/save.png" alt=""/>
           </button>
         </div>
         <div className={`minimumStock ${minimumStockVisibility}`}>
           <label>Estoque Mínimo</label>
           <span className="amount">{this.state.minimumStock}</span>
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

export default GroceryInputItem;
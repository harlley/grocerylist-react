import React from 'react';

class GroceryUpdateList extends React.Component {

  onClickCancel() {
    this.props.onClickCancel();
  }

  onClickSave() {
    this.props.onClickUpdateList();
  }
  
  render() {
    const visibility = this.props.visible? "" : "hidden";
    return (
      <div className={`updateList ${visibility}`}>
        <button className="cancel" onClick={this.onClickCancel.bind(this)}>
          <img src="images/cancel.png" alt=""/>
        </button>
        <button className="save" onClick={this.onClickSave.bind(this)}>
          <label>Salve suas alterações</label>
          <img src="images/save.png" alt=""/>
        </button>
      </div>
    )
  }
}

export default GroceryUpdateList;
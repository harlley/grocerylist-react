import React from 'react';

import GroceryInputItem from './GroceryInputItem';
import GroceryUpdateList from './GroceryUpdateList';
import GroceryItem from './GroceryItem';

class GroceryList extends React.Component {  
  
  constructor() {
    super();
    this.state = { 
      items: this.loadData(),
      updateListVisible: false,
      inputItemVisible: true
    };
  }

  loadData() {
    let listItems = [];
    const localData = localStorage.getItem("groceryList");
    if (localData) {
      listItems = JSON.parse(localData);
    }
    return listItems;
  }
    
  saveToLocalStorage(items) {
    localStorage.setItem("groceryList", JSON.stringify(items));
  }

  add(item) {
    const savedItem = this.state.items.filter(i => i.name === item.name);
    if (savedItem.length > 0) {
      alert("Produto já cadastrado");
    }
    else {
      const items = this.state.items.concat(item);
      this.setState({ items });
      this.saveToLocalStorage(items);
    }
  }

  updateList() {
    this.saveToLocalStorage(this.state.items);
    this.hideUpdateList();
  }

  remove(name) {
    const items = this.state.items.filter(i => i.name !== name);
    this.setState({ items });
    this.saveToLocalStorage(items);
  }

  showUpdateList() {
    this.setState({ 
      inputItemVisible: false,
      updateListVisible: true
    });
  }

  hideUpdateList() {
    this.setState({ 
      inputItemVisible: true,
      updateListVisible: false
    });
  }

  updateItem(item) {
    let items = this.state.items;
    const index = items.findIndex(i => i.name === item.name);
    items[index].amountStock = item.amountStock;
    this.setState({ items });
    this.showUpdateList();
  }

  render() {
    return (
      <div>
        <div className="topBar">
          <GroceryInputItem visible={this.state.inputItemVisible} 
                            onClickSave={this.add.bind(this)}/>

          <GroceryUpdateList  visible={this.state.updateListVisible}
                              onClickUpdateList={this.updateList.bind(this)}
                              onClickCancel={this.hideUpdateList.bind(this)} />
        </div>
        <ul id="GroceryList">
          {
            this.state.items.map( (item, index) =>
              <li key={index}>
                <GroceryItem  item={item} 
                              onDelete={this.remove.bind(this)}
                              onUpdateItem={this.updateItem.bind(this)} />
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default GroceryList;
import React from 'react';
import ReactDOM from 'react-dom';

import GroceryList from './components/GroceryList';
import './app.css';

class App extends React.Component {
  render() {
    return (
      <GroceryList/>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
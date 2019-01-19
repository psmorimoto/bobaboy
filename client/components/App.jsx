import React from 'react';
import Board from './Board.jsx';
import Orders from './Orders.jsx';
import style from '../../public/styles.css.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
    };
  }

  render() {
    return (
      <div>
        <h1 style={style.title}>Urban Ritual Orders</h1>
        <Board />
        <Orders />
      </div>
    );
  }
}

export default App;
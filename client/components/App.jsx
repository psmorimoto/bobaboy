import React from 'react';
import Board from './Board.jsx';
import Orders from './Orders.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: {},
    };
  }

  render() {
    return (
      <div>
        <h1>Urban Ritual Orders</h1>
        <Board />
        <Orders />
      </div>
    );
  }
}

export default App;
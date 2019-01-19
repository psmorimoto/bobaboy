import React from 'react';
import Board from './Board.jsx';
import Orders from './Orders.jsx';
import Menu from './Menu.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: {},
      menu: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.scroll = this.scroll.bind(this);
  }

  toggleModal () {
    if (!this.state.show) {
      document.body.style.overflow = 'hidden';  
    } else {
      document.body.style.overflow = 'scroll';
    }
    this.scroll();
    this.setState({
      menu: !this.state.menu,
    });
  }

  scroll () {
    var that = this;
    window.scrollTo({
      top: that.topRef.current.offsetTop,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div>
        <h1>Urban Ritual Orders</h1>
        <Board />
        <Orders />
        <Menu scroll={this.scroll} toggleModal={this.toggleModal} menu={this.state.menu}
      </div>
    );
  }
}

export default App;
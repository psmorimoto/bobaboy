import React from 'react';

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerName: '',
      tea: '',
      milk: '',
      ice: '',
      sweetness: '',
      toppings: {},
    };
  }

  render() {
    return (
      <div>
        This is orders.
      </div>
    )
  }
}

export default Orders;
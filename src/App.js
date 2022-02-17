import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products : [
            {
                img : 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80',
                name : 'Smart Phone',
                price : 50,
                qty : 1,
                id : 0
            },
            {
                img : 'https://images.unsplash.com/photo-1617043983671-adaadcaa2460?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
                name : 'Watch',
                price : 20,
                qty : 4,
                id : 1
            },
            {
                img : 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
                name : 'Laptop',
                price : 500,
                qty : 2,
                id : 2
            },
            {
                img : 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80',
                name : 'Headphones',
                price : 40,
                qty : 5,
                id : 3
            },
            {
                img : 'https://images.unsplash.com/photo-1578319439584-104c94d37305?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                name : 'Ear Pods',
                price : 10,
                qty : 5,
                id : 4
            }
        ]
    }
  }
  handleIncrease = (product) => {
    const { products } = this.state;
    const id = products.indexOf(product);
    products[id].qty += 1;

    this.setState({
        products
    })
  }
  handleDecrease = (product) => {
    const { products } = this.state;
    const id = products.indexOf(product);
    if(products[id].qty){
        products[id].qty -= 1;
    }
    this.setState({
        products
    })
  }
  handleDelete = (id) => {
    const {products} = this.state;
    const newProducts = products.filter((product) => product.id !== id);
    this.setState({
        products : newProducts
    });
  }
  handleCount = () => {
    const { products } = this.state;
    let count = 0;
    products.map((product) => {
      count += product.qty;
      return count;
    })
    return count;
  }
  handleAmount = () => {
    const { products } = this.state;
    let amount = 0;
    products.map((product) => {
      amount += product.price * product.qty;
      return amount;
    })
    return amount;
  }

  render() {
    const {products} = this.state;
    const amount = this.handleAmount();
    return (
      <div className="App">
        <Navbar count={this.handleCount()}/>
        <Cart products={products}
              handleDecrease={this.handleDecrease}
              handleIncrease={this.handleIncrease}
              handleDelete={this.handleDelete}
        />

        <div style={{
          display : 'flex',
          justifyContent : 'center',
          margin : '30px 0px',
          fontFamily : 'Playfair Display',
          fontSize : '24px',
          color : '#ff2e63'
        }}>
          <h2><span style={{color : '#333'}}>Total Price :</span> $ {amount}</h2>
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    console.log(props);
    const { products , handleDecrease , handleIncrease ,handleDelete } = props;
    return (
        <div className='cart'>
            {products.map((product) => {
            return <CartItem product={product} key={product.id}
                    handleIncrease={handleIncrease}
                    handleDecrease={handleDecrease}
                    handleDelete={handleDelete}
                    />
            })}
        </div>
    )   
}

export default Cart;
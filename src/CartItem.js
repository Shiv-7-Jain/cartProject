import React from 'react';

const CartItem = (props) => {
    const {product , handleIncrease , handleDecrease ,handleDelete } = props;
    const {img ,name , price , qty ,id} = product;
    return (
        <div className='cartItem'>
            <img src={img} alt={name}/>
            <div className='content'>
                <div className='name'>
                    {name}
                </div>
                <div className='price'>
                    Price : ${price}
                </div>
                <div className='quantity'>
                    <div>
                        Quantity : 
                    </div>
                    <div className='qty-content'>
                        <ion-icon onClick={() => handleIncrease(product)} name="add-circle-outline"></ion-icon>
                        <p>
                            {qty}
                        </p>
                        <ion-icon onClick={() => handleDecrease(product)} name="remove-circle-outline"></ion-icon>
                    </div>
                </div>
            </div>
            <button onClick={() => handleDelete(id)} className='delete'>
                Delete Item <ion-icon name="trash"></ion-icon>
            </button>
        </div>
    )
}

export default CartItem;
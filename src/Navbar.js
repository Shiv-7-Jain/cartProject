import React from 'react';

const Navbar = (props) => {
    const count = props.count;
    return (
        <div className='navbar'>
            <div className='nav'>
                <h1>Cartiko</h1>
                <div className='logo'>
                    <ion-icon name="cart"></ion-icon>
                    <span>{count}</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
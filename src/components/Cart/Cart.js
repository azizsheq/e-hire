import './Cart.css'

import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    const nameString = cart.reduce((preVal, curVal, idx) => {
        return idx == 0 ? curVal.name : preVal + ' , ' + curVal.name;
    }, '' );
    // console.log(nameString);

    const totalBudget = cart.reduce((budget,user) => budget + user.price, 0);

    function numberWithCommas(x) {
        let num = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num;
    }

    return (
        <div className="container sticky-top cart">
            <div >
                <h2 style={{textAlign: 'center'}}>-Your Cart-</h2>
                <div>
                    <h4>Added Player Name -</h4>
                    <h5>{nameString}</h5>
                </div>
                <div>
                    <h4>Total Budget -</h4>
                    <h5>$ {numberWithCommas(totalBudget)}.00</h5>
                </div>
            </div>
        </div>
    );
};
    
export default Cart;
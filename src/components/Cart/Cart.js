import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

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
                <h2 style={{textAlign: 'center'}}>Your Cart  <FontAwesomeIcon icon={faCartPlus} /></h2>
                <div>
                    <h5>Player(s) Count : <b>{cart.length}</b></h5>
                </div>
                <div>
                    <h5>Player(s) Name -</h5>
                    <h6>{nameString}</h6>
                </div>
                <div>
                    <h5>Total Budget -</h5>
                    <h6>$ {numberWithCommas(totalBudget)}.00</h6>
                </div>
                <div style={{textAlign: 'right'}}>
                    <button className="btn btn-primary proceed-btn">Click To Proceed</button>
                </div>
            </div>
        </div>
    );
};
    
export default Cart;
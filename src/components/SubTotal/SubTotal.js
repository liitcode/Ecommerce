import React from 'react';
import './SubTotal.scss';
import CurrencyFormat from 'react-currency-format';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getCartTotal } from '../../utils/cartTotal';

const SubTotal = () => {
    const { cart, user } = useSelector((state) => state.data);
    let history = useHistory();

    const handleCheckout = () => {
        if(user) {
            history.push('/payment')
        } else{
            history.push('/login')
        }
    }

    return (
       <div className="subtotal">
           <CurrencyFormat
            renderText = {(value) =>(
                <>
                <p>
                    SubTotal ({cart.length} items) : <strong>{value}</strong>
                </p>
                <small className='subtotal-gift'>
                    <input type='checkbox' />
                    This order contains a gift.
                </small>
                </>
            )}
            decimalScale = {2}
            value = {getCartTotal(cart)}
            displayType= {"text"}
            thousandSeparator={true}
            prefix={"₹"}
           />
           <button onClick={handleCheckout}>Proceed To Checkout</button>
       </div>
    )
}

export default SubTotal

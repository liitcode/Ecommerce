import React, {useState, useEffect } from 'react';
import './Payment.scss';
import { useSelector, useDispatch } from 'react-redux';
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import { getCartTotal } from '../../utils/cartTotal';
import { useHistory, Link } from 'react-router-dom';
import { db } from '../../utils/firebase';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import instance from '../../utils/axios';
import { emptyCart } from '../../redux/actions';

const Payment = () => {
    const { cart,user} = useSelector((state) => state.data);
    let dispatch = useDispatch();
    let history = useHistory();
    const [success,setSuccess] = useState(false);
    const [processing,setProcessing] = useState('');
    const [error,setError] = useState(null);
    const [disabled,setDisabled] = useState(true);
    const [clientSecret,setClientSecret] = useState(true);

    useEffect(() =>{
        const getCLientSecret = async () => {
            const response = await instance({
                method: "POST",
                url: `?total=${getCartTotal(cart) * 100}`,

            });
            console.log("Responseeeeee",response)
            setClientSecret(response.data.clientSecret);
        }
        getCLientSecret();
    },[cart])
    
    const stripe = useStripe();
    const element = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card: element.getElement(CardElement)
            }
        })
        .then(({paymentIntent}) => {
            
            console.log("CLient SECRETT",paymentIntent)
            db
            .collection("users")
            .doc(user && user.uid)
            .collection("orders")
            .doc(paymentIntent.id)
            .set({
                cart: cart,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })
            setSuccess(true);
            setError(null);
            setProcessing(false);
            dispatch(emptyCart());
            history.replace('/orders');
        })
    }
    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : ''); 
    }

    return (
        <div className="payment">
            <div className="payment-container">
                <h1>Checkout { <Link to='/checkout'>{cart.length} items</Link> }</h1>
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment-address">
                        <p>{user?.email}</p>
                        <p>West Delhi,</p>
                        <p>New Delhi,India</p>
                    </div>
                </div>
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment-item">
                        {cart && cart.map((item) => (
                            <CheckoutProduct
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment-details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment-priceContaie">
                                <CurrencyFormat
                                    renderText = {(value) =>(
                                        <>
                                        <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale = {2}
                                    value = {getCartTotal(cart)}
                                    displayType= {"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || success}>
                                    <span>
                                    {processing ? <p>Processing</p> : 'Buy Now'}
                                    </span>
                                </button>
                            </div>
                             {error && <div>{error}</div>}              
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;

import React from 'react';
import './Checkout.scss';
import { useSelector } from 'react-redux';
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import SubTotal from '../../components/SubTotal/SubTotal';

const Checkout = () => {
    const { cart, user } = useSelector((state) => state.data);
    return (
       <div className="checkout">
           <div className="checkout-left">
                <img 
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/Events/AugART21/1500-300.jpg"
                alt="banner" 
                className="checkout-ad" 
                />
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout-title">
                        {cart.length === 0 ? 'Your Cart is Empty' : 'Your Cart'}
                    </h2>
                    { cart && cart.map((item) => (
                        <CheckoutProduct 
                        key={item.id}
                        id= {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout-right">
                { <SubTotal />}
            </div>
       </div>
    )
}

export default Checkout;

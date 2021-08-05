import React from 'react';
import './CheckoutProduct.scss';
import { useDispatch } from 'react-redux';
import ShoppingCartOutlinedIcon  from '@material-ui/icons/ShoppingCartOutlined';
import { removeFromCart } from '../../redux/actions';


const CheckoutProduct = ({ id,title,image,rating,price,hideButton }) => {
    let dispatch = useDispatch();
    const removeItem = () => {
       dispatch(removeFromCart(id));
    }
    return (
        <div className="checkout-product">
            <img src={image} alt="product" className="checkout-product-image" />
            <div className="checkout-product-info">
                <p className="checkout-product-title">{title}</p>
                <p className="checkout-product-price">
                    <strong>$</strong>
                    <strong>{price}</strong>
                </p>
                <div className="checkout-product-rating">{
                    Array(rating)
                    .fill()
                    .map((_,index) => (
                        <p key={index}>⭐️</p>
                    ))}
                </div>
                {!hideButton && (
                <button onClick={removeItem} >
                    <i >
                        <ShoppingCartOutlinedIcon />
                    </i>
                    Remove From Cart
                </button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct;

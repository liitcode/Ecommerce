import React from 'react';
import './Product.scss';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon  from '@material-ui/icons/ShoppingCartOutlined';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions';

const Product = ({ id, title, image, price, rating, specification, detail}) => {
    const dispatch = useDispatch();
    const addItemToCart = () => {
        const item = {
            id,
            title,
            image,
            price,
            rating,
            specification,
            detail,
        };
        dispatch(addToCart(item));
    }

    return (
        <div className='product'>
            <div className="product-info">
                <Link to = {`/product/${id}`} className='product-title'>
                    <p>{title}</p>
                </Link>
                <p className="product-price"> 
                    <strong>₹</strong>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating).fill()
                    .map((_,index) => (
                        <p key={index}>⭐️</p>
                    ) )}
                </div>
            </div>  
                <img src = {image} alt='product' />
                <button onClick={addItemToCart}>
                    <i>
                        <ShoppingCartOutlinedIcon />
                    </i>
                    Add to Cart
                </button>
        </div>
    )
}

export default Product;

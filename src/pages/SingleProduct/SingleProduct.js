import React from 'react';
import './SingleProduct.scss';
import { useParams } from 'react-router';
import { products } from '../../utils/data';
import ShoppingCartOutlinedIcon  from '@material-ui/icons/ShoppingCartOutlined';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions';

const SingleProduct = () => {
    let { id } = useParams();
    let singleProduct = products.find((item) => item.id === id);
    const dispatch = useDispatch();

    const addPToCart = () => {
        const item = {
            id : singleProduct.id,
            rating : singleProduct.rating,
            title : singleProduct.title,
            price : singleProduct.price,
            image : singleProduct.image,
            specification : singleProduct.specification,
            detail : singleProduct.detail,
        };
        dispatch(addToCart(item));  
    };

    return (
        <div className="single-product-container">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/Events/AugART21/1500-300.jpg" 
            alt="ad" 
            className="single-product-ad" />
            <div className="single-product">
                <img src={singleProduct.image} alt='single-product'className='single-product-image'/>
                <div className="single-product-info">
                    <div className="single-product-title">{singleProduct.title}</div>
                    <div className="single-product-rating">{
                        Array(singleProduct.rating)
                        .fill()
                        .map((_,index) => (
                            <p key={index}>⭐️</p>
                        ))}
                    </div>
                    <p className="single-product-price">
                        Price: <strong>$</strong>
                        <strong>{singleProduct.price}</strong>
                    </p>
                    <div className="single-product-specification">
                        <h4>Specification</h4>
                        {singleProduct.specification && singleProduct.specification.map((item,index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </div>
                    <div className="single-product-description">
                        <h4>Product Description</h4>
                        <p>{singleProduct.detail}</p>
                    </div>
                    <button onClick={addPToCart}>
                        <i>
                            <ShoppingCartOutlinedIcon />
                        </i>
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;

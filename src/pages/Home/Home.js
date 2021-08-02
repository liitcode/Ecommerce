import React from 'react';
import './Home.css';
import { headerItems, products } from '../../utils/data'
import Banner1 from '../../banners/b1.jpg';
import Banner2 from '../../banners/b2.jpg';
import Banner3 from '../../banners/b3.jpg';
import Banner4 from '../../banners/b4.jpg';
import Banner5 from '../../banners/b5.jpg';
import Banner6 from '../../banners/b6.jpg';
import Banner7 from '../../banners/b7.jpg';
import Banner8 from '../../banners/b8.jpg';
import Slider from '../../components/Slider/Slider';
import Product from '../../components/Product/Product';
import BackToTop from '../../components/BackToTop/BackToTop';

const Home = () => {
    const bannerImages = [Banner1,Banner2,Banner3,Banner4,Banner5,Banner6,Banner7,Banner8];
    return (
        <div>
            <div className='item-container'>
                {headerItems && headerItems.map((item,index)=> <p>{item}</p>)}
            </div>
            <div className="home">
                <div className="home-container">
                    <Slider images={bannerImages} />
                    <div className="home-row">
                        {products.slice(0,2).map((item) => (
                            <Product 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price = {item.price}
                            rating = {item.rating}
                            image = {item.image}
                            specification = {item.specification}
                            detail = {item.detail }
                            />
                        ))}
                    </div>
                    <div className="home-row">
                        {products.slice(2,5).map((item) => (
                            <Product 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price = {item.price}
                            rating = {item.rating}
                            image = {item.image}
                            specification = {item.specification}
                            detail = {item.detail }
                            />
                        ))}
                    </div>
                    <div className="home-row">
                        {products.slice(5,6).map((item) => (
                            <Product 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price = {item.price}
                            rating = {item.rating}
                            image = {item.image}
                            specification = {item.specification}
                            detail = {item.detail }
                            />
                        ))}
                    </div>
                    <div style={{marginTop:'50px'}}>{
                        <BackToTop />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

import React, { useState, useEffect } from 'react';
import './Slider.scss';
import { ArrowForwardIos,ArrowBackIos } from '@material-ui/icons';

const Slider = ({images}) => {
    const [index,setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = images.length-1;
        if(index < 0) setIndex(lastIndex);
        if(index > lastIndex) setIndex(0);
    },[index,images]);

    useEffect(() => {
        let slider = setInterval(()=>{
            setIndex(index+1);
        },3000);
        return() => {
            clearInterval(slider);
        }
    },[index]);

    return (
        <div className="section">
            <div className="section-center">
                {images.map((image,imageIndex) => {
                    let position = 'nextSlide';
                    if(imageIndex === index) position = 'activeSlide';
                    if(imageIndex === index-1 || (index === 0 && imageIndex === images.length-1)) position='lastSlide';
                    return(
                        <article className={position} key ={imageIndex}>
                            <img src={image} alt='banner_img' className='banner-img' />
                        </article>
                    );
                })}
                <p className='prev' onClick={() => setIndex(index-1)}>
                    <ArrowBackIos />
                </p>
                <p className="next" onClick={ () => setIndex(index+1)}>
                    <ArrowForwardIos />
                </p>
            </div>
        </div>
    )
}

export default Slider

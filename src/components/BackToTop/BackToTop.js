import React,{ useState, useEffect }from 'react';
import './BackToTop.scss';

const BackToTop = () => {
    const[isVisible,setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if(window.pageYOffset > 900)  {
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }    
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener("scroll",toggleVisibility);
        return () => {
            window.removeEventListener("scroll",toggleVisibility);
        };
    },[])

    return (
       <div className="scroll-to-top">
           {isVisible && (
               <div className="back-top-container" onClick={scrollToTop} >
                <p className="back-top-container-text">Back To Top</p>     
               </div>
           )
           }
       </div>
    )
}

export default BackToTop

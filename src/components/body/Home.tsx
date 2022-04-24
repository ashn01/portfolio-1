import react, { useLayoutEffect } from 'react'
import {AnimationOnScroll } from 'react-animation-on-scroll';

import "animate.css/animate.min.css";
import '../../css/home.scss'

export default function Home(){

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <div className={`home`}>
            <div className={`images`}>
                <img className={`arrow animate__animated animate__fadeIn`} src={`./${process.env.REACT_APP_URL}/images/Arrow.png`}/>
                <img className={`name animate__animated animate__fadeIn`} src={`./${process.env.REACT_APP_URL}/images/Group 26.png`}/>
                
            </div>
            <div className={`home-greet`}>
                <h1>
                    <div>
                        <p>An</p>
                        <div className={`home-accent`}>
                            <div className={`text-container`}>
                                <p>Observant</p>
                            </div>
                        </div> 
                        <p>UX & UI designer</p>
                    </div> 
                    <div><p>with attention to detail and a</p></div>
                    <div>
                        <p>strong background in </p>
                        <div className={`home-accent-second`}>
                            <div className={`text-container visual-design`}>
                                <p>Visual Design</p>
                            </div>
                        </div>
                        .
                    </div> 
                </h1>
            </div>
            <div className={`home-contents`}>
                <AnimationOnScroll animateOnce animateIn="animate__fadeIn">
                    <div className={`contents`}>
                        <h2>Group Project</h2>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>finibus nec velit ut, sodales condimentum libero.</h6>
                        <h6>2022</h6>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateOnce animateIn="animate__fadeIn">
                    <div className={`contents`}>
                        <h2>TC Global</h2>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>finibus nec velit ut, sodales condimentum libero.</h6>
                        <h6>2022</h6>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateOnce animateIn="animate__fadeIn">
                    <div className={`contents`}>
                        <h2>MTD app</h2>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>finibus nec velit ut, sodales condimentum libero.</h6>
                        <h6>2022</h6>
                    </div>
                </AnimationOnScroll>
                
                <div className={`images`}>
                    <AnimationOnScroll animateOnce animateIn="animate__bounceInRight">
                        <img className={`pencil`} src={`./${process.env.REACT_APP_URL}/images/Group 31.png`}/>
                    </AnimationOnScroll>
                </div>
            </div>
        </div>
    )
}
import react, { useEffect, useLayoutEffect } from 'react'
import {AnimationOnScroll } from 'react-animation-on-scroll';
import $ from 'jquery'
import {motion} from 'framer-motion'

import "animate.css/animate.min.css";
import '../../css/home.scss'
import { Link } from 'react-router-dom';

export default function Home(){

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    useEffect(()=>{
    })

    return (
        <motion.div className={`home`}
            initial={{ x:window.innerWidth}} 
            animate={{ x:0,transition:{duration:1} }} 
            exit={{ x:-window.innerWidth,transition:{duration:0.5} }}
        >
            <div className={`images`}>
                <img className={`arrow animate__animated animate__fadeIn`} src={`./images/Arrow.png`}/>
                <img className={`name animate__animated animate__fadeIn`} src={`./images/Group 26.png`}/>
                
            </div>
            <div className={`home-greet`}>
                <h1 className={`animate__animated animate__fadeIn`}>
                    <div>
                        <p>An</p>
                        <div className={`hvr-grow-rotate`}>
                            <div className={`home-accent animate__animated animate__fadeIn`}>
                                <div className={`text-container`}>
                                    <p className={`animate__animated animate__fadeIn`}>Observant</p>
                                </div>
                            </div> 
                        </div>
                        <p>UX & UI designer</p>
                    </div> 
                    <div><p>with attention to detail and a</p></div>
                    <div>
                        <p>strong background in </p>
                        <div className={`hvr-grow-rotate`}>
                            <div className={`home-accent-second animate__animated animate__fadeIn`}>
                                <div className={`text-container visual-design`}>
                                    <p className={`animate__animated animate__fadeIn`}>Visual Design</p>
                                </div>
                            </div>
                        </div>
                        .
                    </div> 
                </h1>
            </div>
            <div className={`home-contents`}>
                <AnimationOnScroll animateOnce animateIn="animate__fadeIn">
                    <div className={`contents`}>
                        <Link to={`/${process.env.REACT_APP_URL}/1`}>
                            <h2>TC Global Project</h2>
                            <h6>A complete design overhaul for a community platform to connect people and share tamils stories including various services in one website.</h6>
                            <h6>2022 Jan - Work in progress</h6>
                        </Link>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateOnce animateIn="animate__fadeIn">
                    <div className={`contents`}>
                        <h2>Open Room</h2>
                        <h6>encourages individual users to feel motivated when studying through online study groups. </h6>
                        <h6>2022 Feb - Work in progress</h6>
                    </div>
                </AnimationOnScroll>
            </div>
        </motion.div>
    )
}
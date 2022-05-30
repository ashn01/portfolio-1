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
        <div className={`home`}>
            <div className={`home-greet`}>
                <h1 >
                    <div className={`animate__animated animate__slideInUp `}>
                        <p className={`animate__animated animate__fadeIn`}>
                        Hi there, I’m Isabella.
                        </p>
                    </div> 
                    <div className={`animate__animated animate__slideInUp `}>
                        <p className={`animate__animated animate__fadeIn`}>
                        An <div className={`home-greet-accent-container`} onClick={()=>$(".home-greet-accent-1-container").css({"animation":"appearAnimation ease 1s forwards"})}>
                                <div className={`home-greet-accent-1-container`}>
                                    <p className={`home-greet-accent-1`}>observant</p>
                                </div>
                            </div> UX & UI designer  
                        </p>
                    </div>
                    <div className={`animate__animated animate__slideInUp `}>
                        <p className={`animate__animated animate__fadeIn`}>with attention to detail &</p>
                    </div> 
                    <div className={`animate__animated animate__slideInUp `}>
                        <p className={`animate__animated animate__fadeIn`}>a strong background in 
                        <div className={`home-greet-accent-container2`} onClick={()=>$(".home-greet-accent-2-container").css({"animation":"appearAnimation2 ease 1s forwards"})}>
                            <div className={`home-greet-accent-2-container`}>
                                <p className={`home-greet-accent-2`}>visual design</p>
                            </div>
                        </div>.</p>
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
                        <h6>Encourages individual users to feel motivated when studying through online study groups. </h6>
                        <h6>2022 Feb - Work in progress</h6>
                    </div>
                </AnimationOnScroll>
            </div>
        </div>
    )
}
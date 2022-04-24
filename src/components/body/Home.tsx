import react, { useEffect, useLayoutEffect } from 'react'
import {AnimationOnScroll } from 'react-animation-on-scroll';
import $ from 'jquery'

import "animate.css/animate.min.css";
import '../../css/home.scss'

export default function Home(){

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    useEffect(()=>{
        $(window).scroll(()=>{
            if ($(".mix").offset()!.top - 600 < $(window).scrollTop()!){
                $(".mix").css({"opacity":"1"})
            }
        })
    })

    return (
        <div className={`home`}>
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
                        <h2>TC Global Project</h2>
                        <h6>Redesigning a community platform to connect people and share <br/>tamils stories including various brand in one website.</h6>
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
                
                <div className={`images mix`}>
                    <AnimationOnScroll animateOnce animateIn="animate__bounceInUp" afterAnimatedIn={()=>$(".mix").css({"opacity":"1"})}>
                        <img className={`pencil`} src={`./portfolio-1/images/Group 31.png`}/>
                    </AnimationOnScroll>
                </div>
            </div>
        </div>
    )
}
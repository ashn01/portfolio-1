import react, { useEffect, useState } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

// css
import '../../css/header.scss'


export default function Header() {
    useEffect(()=>{
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        
        if (prevScrollpos > currentScrollPos) {
            $(".header").css({height:"100px", transition:"top 0.3s ease-in-out", top:"-0px"});
        } else {
            $(".header").css({height:"100px", transition:"top 0.3s ease-in-out", top:"-138px"});
        }

        if (currentScrollPos == 0){
            $(".header").css({height:"138px", transition:"top 0.3s ease-in-out", top:"-0px"});
        }

        // color change effect
        if(currentScrollPos > 0){
            $("html").addClass("background-white");
            $("h1").addClass("white");
            $(".nav li").addClass("white");
            $(".nav-left").addClass("white");
          }
        prevScrollpos = currentScrollPos;

        // end event
        if ($(window).scrollTop()! + $(window).height()! == $(document).height()){
            $(".header").css({height:"138px", transition:"top 0.3s ease-in-out", top:"-0px"});
            
            $(".nav li").removeClass("white");
            $(".nav-left").removeClass("white");
        }

        }
    })

    return (
        <div className={`header`}>
            <NavBar />
        </div>
    )
}

function NavBar() {
    return (
        <div className={`animate__animated animate__fadeIn navbar`}>
            <div className={`navbar-container`}>
                <div className={`navbar-divider`}>
                    <div className={`column`}>
                        <p className={`nav-left`}>
                            ISabella Ro<br/> UIUX DESIGNER BASED IN TORONTO <br/>Click here to see <u><b>resume</b></u>
                        </p>
                    </div>
                    <div className={`column`}>
                        <ul className={`nav`}>
                            <li>
                                <div className={`highlight`}>
                                    <img src={`./images/Highlight.png`} />
                                </div>
                                <p>Project</p>
                            </li>
                            <li>
                                <div className={`highlight`}>
                                    <img src={`./images/Highlight.png`} />
                                </div>
                                <p>1min idea</p>
                            </li>
                            <li>
                                <div className={`highlight`}>
                                    <img src={`./images/Highlight.png`} />
                                </div>
                                <p>Info</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
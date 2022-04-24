import react, { useEffect } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

// css
import '../../css/header.scss'


export default function Header() {
    useEffect(()=>{
        $(document).scroll(()=>{
            if($(document).scrollTop()! > 50){
                $(".navbar").css({backgroundColor:"rgba(254,254,254,0.7)", transition:"1s"});
            }else{
                $(".navbar").css({backgroundColor:"rgba(246,245,243,0.7)"});
            }
        })
    })

    return (
        <div className={`header`}>
            <NavBar />
        </div>
    )
}

function NavBar() {
    return (
        <div className={`navbar`}>
            <div className={`navbar-container`}>
                <div className={`navbar-divider`}>
                    <div className={`column`}>
                        <Link to={`/${process.env.REACT_APP_URL}`} onClick={()=>window.scrollTo(0,0)}>
                            <div className={`nav-button hvr-sweep-to-right`}>
                                <p>
                                    ISABELLA
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className={`column`}>
                        <div className={`nav-resume hvr-sweep-to-right neon`}>
                            <p>
                                Resume
                            </p>
                        </div>
                        <ul className={`nav`}>
                            <li>
                                <div className={`highlight`}>
                                    <img src={`./images/Highlight.png`} />
                                </div>
                                <p>Design</p>
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
                                <p>About</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
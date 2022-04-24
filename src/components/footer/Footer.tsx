import react from 'react'
import { Link } from 'react-router-dom'


import '../../css/footer.scss'

export default function Footer(){
    return (
        <div className={`footer`}>
            <div className={`footer-contents`}>
                <div className={`footer-container`}>
                    <div className={`footer-top`}>
                        <div className={`footer-links-container`}>
                            <ul className={`footer-links`}>
                                <li className={`linkedin`}>
                                    <a href="https://www.linkedin.com/in/isabella-ro-61b762178/">
                                        <img src={`./images/in.png`}/>
                                    </a>
                                </li>
                                <li className={`be`}>
                                    <a href="https://www.behance.net/isabellaro">
                                        <img src={`./images/be.png`}/>
                                    </a>
                                </li>
                                <li className={`email`}>
                                    <a href="mailto:yj.ro@me.com">
                                        <img src={`./images/mail.png`}/>
                                    </a>
                                </li>
                            </ul>
                            <div className={`footer-message`}>
                                <p>
                                    Why don’t we work together?
                                </p>
                                <div className={`images`}>
                                        <img src={`./images/Highlight L.png`} className={`highlight`}/>
                                </div>
                                <a className={`email-button`} href="mailto:yj.ro@me.com">
                                    <div className={`text-container`}>
                                        <p>
                                            Email me
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className={`footer-bottom`}>
                        <div className={`footer-bottom-left`}>
                            <Link to={`/${process.env.REACT_APP_URL}`} onClick={()=>window.scrollTo(0,0)}>
                                <div className={`footer-button hvr-sweep-to-right`}>
                                    <p>
                                        ISABELLA
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className={`footer-bottom-right`}>
                            <p className={`footer-copyright`}>
                            Copyright © 2022 Isabella Portfolio website All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
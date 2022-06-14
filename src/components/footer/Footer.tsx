import react from 'react'
import { Link } from 'react-router-dom'


import '../../css/footer.scss'

export default function Footer(){
    return (
        <div className={`footer`}>
            <div className={`footer-contents`}>
                <div className={`footer-container`}>
                    <div className={`footer-top`}>
                        <div className={`footer-message`}>
                            <div>
                                <p className={`footer-main-message`}>
                                    Why don’t we work<br/> together?
                                </p>
                            </div>
                            <div>
                                <p className={`footer-sub-message`}>
                                    Pop me an email at yj.ro@me.com - <br />I’d love to hear from you!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={`footer-bottom`}>
                        <div className={`footer-bottom-container`}>
                            <div className={`footer-bottom-left`}>
                                <p className={`footer-copyright`}>
                                    ©2022 All Rights Reserved
                                </p>
                            </div>
                            <div className={`footer-bottom-right`}>
                                <ul className={`footer-item-list`}>
                                    <li>
                                        <a href={`https://www.linkedin.com/in/isabella-ro-61b762178/`}><img src={`${process.env.PUBLIC_URL}/images/Linkedin.svg`} alt={`Linkedin`}/></a>
                                    </li>
                                    <li>
                                        <a href={`https://www.linkedin.com/in/isabella-ro-61b762178/`}><img src={`${process.env.PUBLIC_URL}/images/Behance.svg`} alt={`Behance`}/></a>
                                    </li>
                                    <li>
                                        <a href={`https://www.linkedin.com/in/isabella-ro-61b762178/`}><img src={`${process.env.PUBLIC_URL}/images/mail.svg`} alt={`Email`}/></a>
                                    </li>
                                </ul>
                                <div onClick={()=>window.scrollTo({top:0, behavior:"smooth"})} style={{backgroundColor:"#D0FC53", width:"64px",height:"64px", cursor:"pointer"}}>
                                    <img src={`./portfolio-1/images/Arrow.svg`} style={{position:"absolute", transform:"translate(21px, 18px)", width:"24px"}}/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
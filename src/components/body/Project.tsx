import react from 'react'

import '../../css/project.scss'

export default function Project(){

    return (
    <div className={`project`}>
        <div className={`project-container`}>
            <div className={`project-title`}>
                <div>   
                    <h1>TC Global Project</h1>
                </div>
                <div>
                    <h6>Redesigning a community platform to connect people and share tamils stories including various brand in one website.</h6>
                </div>
            </div>
            <div className={`project-background`}>
                <div className={`project-background-container`}>
                    <div>
                        <h3>Background</h3>
                    </div>
                    <div>
                        <h6>TamilCulture Global project is to redesign community platform to share Tamil stories and networking. As part of a team, I was paired with two designers and a director. As I lead the project, I was in charge of defining problems to provide solutions, designing the entire product, in addition to improving a better UI system, and marketing materials.</h6>
                    </div>
                </div>
                <div className={`project-background-list`}>
                    <div>
                        <h6>Type</h6>
                        <h5>UXUI Design <br/>Team project</h5>
                    </div>
                    <div>
                        <h6>Duration</h6>
                        <h5>Feb 2022 ~ In Progress</h5>
                    </div>
                    <div>
                        <h6>Tools</h6>
                        <h5>Figma</h5>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <div className={`project-container`}>
            <div className={`project-detail`}>
                <div className={`project-detail-title`}>
                    <h3>
                        What I accomplished
                    </h3>
                    <div className={`project-detail-title-container`}>
                        <div>
                            <h4>Delivered all design screens</h4>
                            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed zipsum odio, finibus nec velit ut, sodales condimentum libero. Suspendisse ultricies eget ex dapibus sollicitudin. disse ultricies eget ex dapibus sollicitudin.</h6>
                        </div>
                        <div>
                            <h4>Build a design system</h4>
                            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum odio, finibus nec velit ut, sodales condimentum libero. Suspendisse ultricies eget ex dapibus sollicitudin. tum libero. Suspendisse ultricies eget ex dapibus sollicitudin.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
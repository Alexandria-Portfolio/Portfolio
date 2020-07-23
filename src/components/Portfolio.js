import React from 'react';

//images
import medCabinet from '../imgs/medCabinetLogo.png'

const Portfolio = () => {
    return (
        <div className="background port">
            <h1>Projects</h1>
            <div class="projects">
                <div className="medCab">
                    <a href="https://med-cabinet-2.netlify.app/index.html" target="blank">
                        <img src={medCabinet} alt="logo" />
                        <p>A web application using React to deliver personalized recommendations for each user</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
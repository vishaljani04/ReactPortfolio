import React from "react";
import './Work.css'
import img1 from './img/work1.jpg';
import img2 from './img/work2.jpg';
import img3 from './img/work3.jpg';

function Work()
{
    return(
        <div>
            <section className="portfolio" id="portfolio">
        <div className="heading">
          <h3>Works</h3>
          <h2>My Amazing Work</h2>
          <p>This is My Projects And Designing Links Are in This Section and I have Also appiled in hackathon 2022<br />so the links in the below. </p>
        </div>
        <div className="portfolio-content">
          <div className="col">
            <img src={img1} />
            <div className="layer">
              <h3>College Website</h3>
              <a href="https://tra-world.000webhostapp.com/" target="_blank"><h5>Click me</h5></a>
            </div>
          </div>
          <div className="col">
            <img src={img2} />
            <div className="layer">
              <h3>Figma DEsign</h3>
              <a href="https://www.figma.com/community/file/1164809368973474201" target="_blank"><h5>click me</h5></a>
            </div>
          </div>
          <div className="col">
            <img src={img3} />
            <div className="layer">
              <h3>Hackathon Website</h3>
              <a href="https://vishaljani04.github.io/hackathon-website/" target="_blank"><h5>click me</h5></a>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
}
export default Work;
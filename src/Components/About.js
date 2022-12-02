import React from "react";
import './About.css'
import img1 from './img/Vishal.jpg'

function About()
{
    return(
        <div>
            {/*------About--*/}
      <section className="about" id="about">
        <div className="about-img">
          <img src={img1} />
        </div>
        <div className="about-text">
          <h3>I'm a Designer</h3>
          <h2>I Can Design Anything You Want</h2>
          <p>Hello there! I'm a web designer and UI Dwsigner, and I'm very passionate and dedicated to my work. With 1 years experience as a beginer developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkVdHLXvHMhZFQsQdBqkmQfwgljwXWXfXmRvJQXSVNnqKSRJnVkxKTnmRgwnMtwtnjfHXs" target="_blank" className="btn">Hire Me</a>
        </div>
      </section>
        </div>
    );
}
export default About;
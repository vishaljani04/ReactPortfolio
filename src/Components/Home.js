import React from "react";
import './Home.css'
import img1 from './img/background.jpg'
import img2 from './img/large-removebg-preview.png'
import img3 from './img/logo1.png'
import img4 from './img/logo2.png'
import img5 from './img/logo3.png'


function Home()
{
    return(
        <div>
        <section className="home" id="home">
          <div className="home-text">
            <h3>Hello, I'm</h3>
            <h1>Vishal jani</h1>
            <h5>A Software Engineer<span>From Surat,Gujarat</span></h5>
            <p>I'm Studying in Diploma IT in Bhagwan Mahavir Polytechnic <br /> I have learn Java,Python,HTML,CSS,JavaScript,And Also Learning in Flutter Devlopment.</p>
            <div className="social">
              <a href="https://www.facebook.com/profile.php?id=100074864182741" target="_blank"><i className="bx bxl-facebook" /></a>
              <a href="https://twitter.com/VishalJ23902219" target="_blank"><i className="bx bxl-twitter" /></a>
              <a href="https://www.linkedin.com/in/vishal-jani-97b32b225/" target="_blank"><i className="bx bxl-linkedin" /></a>
              <a href="https://www.instagram.com/_vish_jani" target="_blank"><i className="bx bxl-instagram" /></a>
            </div>
            <a href="#" className="btn">About Me</a>
          </div>
          <div className="home-img">
            <img src={img2} />
          </div>
        </section>
        {/*------sub service--*/}
        <section className="sub-service">
          <div className="items">
            <div className="sub-box">
              <div className="sub-img">
                <img src={img5} />
              </div>
              <h3>Web Designing</h3>
              <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design and I Have Many Web Languages ReactJs,Nodejs,Express,JavaScript are Learned. 
              </p>
            </div>
            <div className="sub-box">
              <div className="sub-img">
              <img src={img3} />
              </div>
              <h3>Application Devloping</h3>
              <p>I Have Not Any Expirance in this devloping but I am Learning Java,Flutter,Dart,And Xamrine Concepts of Languages Now So I Hope I will be  Successfully application Devloper in 2023. </p>
            </div>
            <div className="sub-box">
              <div className="sub-img">
              <img src={img4} />
              </div>
              <h3>UI Designing</h3>
              <p>Most Methods For Design UI For Website or Application That work well of any Format and Adaptive design and I am Already Using Figma and XD Software for The beautifull design Now. </p>
            </div>
          </div>
        </section>
        </div>
    );
}
export default Home;
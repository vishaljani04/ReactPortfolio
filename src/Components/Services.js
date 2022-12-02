import React from "react";
import './Services.css'
import img3 from './img/logo3.png'
import img4 from './img/logo2.png'

function Services()
{
    return(
        <div>
            <section className="service" id="service">
        <div className="heading">
          <h3>Services</h3>
          <h2>What I Do For Clients</h2>
          <p>I Will Best Try To Complete Your Projects as per Condition and <br /> Requirements of Softwares.</p>
        </div>
        <div className="service-content">
          <div className="row">
            <div className="s s-one">
              <img src={img3} />
            </div>
            <h3>Web Design</h3>
            <h5>Starts From <span>Free</span></h5>
            <p>Languages : React,Node,JavaScript,express <br /> I have many Website are Craeted So First 3 Proejcts Are Free and after Charges are apply.</p>
          </div>
          <div className="row">
            <div className="s s-tow">
              <img src={img4} />
            </div>
            <h3>UI Design</h3>
            <h5>Starts From <span>Free</span></h5>
            <p>Softwares : Figma,Adobe XD,Photoshop,CorelDraw <br /> many Designs are Craeted So First 5 Design Are Free and after Charges are apply.</p>
          </div>
        </div>
      </section>
        </div>
    );
}
export default Services;
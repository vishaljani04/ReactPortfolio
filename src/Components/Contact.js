import React from "react";
import './Contact.css'

function Contact()
{
    return(
        <div>
             <section className="contact" id="contact">
        <div className="container">
          <div className="center">
            <h3>Let's talk about everything</h3>
            <p>Don't like forms? Send me an email.</p>
          </div>
          <div className="action">
            <form>
              <input type="email" name="email" placeholder="Enter Your email" required />
              <input type="submit" name="submit" defaultValue="Submit" />
            </form>
          </div>
        </div>
      </section>
      <div className="ends">
        <p>Made by Vishal Jani © Copyright 2022.</p>
      </div>
        </div>
    );
}
export default Contact;
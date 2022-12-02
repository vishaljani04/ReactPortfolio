import React from 'react';
import './App.css';
import Navbar from './Components/Navbar.js'
import Home from './Components/Home.js'
import About from './Components/About.js'
import Work from './Components/Work.js'
import Services from './Components/Services.js'
import Contact from './Components/Contact.js'

const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


function App() {
  return (
    <div>
      <Navbar></Navbar>
	  <Home></Home>
	  <About></About>
	  <Work></Work>
	  <Services></Services>
	  <Contact></Contact>
    </div>
  );
}

export default App;

import React from "react";
import Links from '../components/Links'


function About(props) {
  function returnBio(){
    if (props.bio === '' || props.bio === undefined){
      return null
    }else{
      return <p>{props.bio}</p>
    }
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {returnBio()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links 
      github={props.github}
      linkedin={props.linkedin}
      />
    </div>
  );
}



export default About;

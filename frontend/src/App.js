import React from 'react';

const SpeakerProfile=(props)=>{
  return(
    <>
    <h3>{props.name}</h3>
    <p>Position: {props.jobTitle}</p>
    <p>Company: {props.company}</p>
    </>
    );
}


function App() {
  const speakerName='adnaned'
  return (
    <>
    <h1>Speaker Profile</h1>
    // Child component with attributes name,jobTitle and company inside parent component
    <SpeakerProfile
    name='Juliet Runolf'
    jobTitle='Director,Marketing' 
    company='Abernathy Group'/>
    </>
  );
  }
  export default App;
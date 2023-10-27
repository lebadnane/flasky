import React from 'react';
import SearchSpeaker from './SearchSpeaker';

const SpeakerProfile = (props) => {
  return (
    <>
      <h3>{props.name}</h3>
      <p>Position: {props.jobTitle}</p>
      <p>Company: {props.company}</p>
    </>
  );
}
/*
function App() {
  //Child component with attributes name,jobTitle and company inside parent component
  const speakerName = 'adnaned'
  return (
    <>
      <h1>Speaker Profile</h1>
      <SpeakerProfile
        name='Juliet Runolf'
        jobTitle='Director,Marketing'
        company='Abernathy Group' />
    </>
  );
}

*/

function App()
{
return (
<div style={{backgroundColor: '#a1c4fd', margin:20,
color:'white'}}>
<h1></h1>
<SearchSpeaker />
</div>
);
}
export default App;
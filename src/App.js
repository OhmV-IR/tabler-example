import './App.css';
import React, {useState} from 'react';
import {IconBellRinging, IconBellRinging2, IconBellRingingFilled, IconBellRinging2Filled, IconBrandGithub, IconBrandPinterest, IconCloudLockOpen, IconSettings, IconPower, IconLock, IconCheck, IconBrandTwitter, IconX} from '@tabler/icons-react'
function App() {
  // adds a locked variable and creates a function called setLocked
  const [locked, setLocked] = useState(false)
  const triggerLock = async event => {
    //code to lock here
    // setLocked function is created by react and input true/false to change the global variable
    await setLocked(true);
    // getElementsByClassName returns all the elemenets in an array so the for loop
    // iterates over them and hides each one
    var lockingDiv = document.getElementsByClassName("lockingDiv");
    for(let i = 0; i < lockingDiv.length; i++){
      lockingDiv[i].style.display = "none";
    }
  }
  const triggerUnlock = async event => {
    // code to unlock here
    await setLocked(false);
    var lockingDiv = document.getElementsByClassName("lockingDiv");
    for(let i = 0; i < lockingDiv.length; i++){
      lockingDiv[i].style.display = "block";
    }
  }
  // Adds an event that is triggered by clicking the connected button
  const successButtonOnclick = async event => {
    // Displays the element for 7.5s then hides it again
    document.getElementById("successAlert").style.display = "block";
    function resetAlert(){
      document.getElementById("successAlert").style.display = "none";
    }
    // Sets code to execute after 7500ms
    setTimeout(resetAlert, 7500);
  }
  const warningButtonOnclick = async event => {
    document.getElementById("warningAlert").style.display = "block";
    function resetAlert(){
      document.getElementById("warningAlert").style.display = "none";
    }
    setTimeout(resetAlert, 7500);
  }
  const dangerButtonOnclick = async event => {
    document.getElementById("dangerAlert").style.display = "block";
    function resetAlert(){
      document.getElementById("dangerAlert").style.display = "none";
    }
    setTimeout(resetAlert, 7500);
  }
  const infoButtonOnclick = async event => {
    document.getElementById("infoAlert").style.display = "block";
    function resetAlert(){
      document.getElementById("infoAlert").style.display = "none";
    }
    setTimeout(resetAlert, 7500);
  }
  // {locked
  // ? yes condition html goes here
  // : no condition html goes here}
  /* features not working morgue lies below:
  <button type="button" class="btn btn-primary" data-bs-trigger="hover" data-bs-toggle="popover"
  title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?"
>
  Very cool button(hover on me)
</button>
  */
  return (
    <><div className="topRightCorner">
    {locked
      ? <IconLock id="topRightIcon" onClick={triggerUnlock} />
      : <IconCloudLockOpen id="topRightIcon" onClick={triggerLock} />}
  </div>
<div className="page-header d-print-none">
<div className="container-xl">
<div className="row row-cards">
<div className="col lg-6">
<div id="successAlert" className="alert alert-success" role="alert">Successful! Everything worked!</div>
<div id="warningAlert" className="alert alert-warning" role="alert">Something went wrong, try again</div>
<div id="dangerAlert" className="alert alert-danger" role="alert">Danger! World is ending in 30 seconds!!!</div>
<div id="infoAlert" className="alert alert-info" role="alert">Info: This is a very cool website built by @OhmVIR</div>
</div></div></div></div><div className="lockingDiv">
    <div className="leftAlign">
      <p>Using the <a href="https://www.github.com/tabler/tabler" target="_blank" rel="noreferrer">tabler package,</a> you can add icons representing brands and other actions to your website</p>
      <a href="https://www.pinterest.com" target="_blank" rel="noreferrer"><IconBrandPinterest className="text-pinterest-red"></IconBrandPinterest></a>
      <IconX className="text-red"></IconX>
      <IconCheck className="text-green"></IconCheck>
      <a href="https://x.com" target="_blank" rel="noreferrer"><IconBrandTwitter className="text-blue"></IconBrandTwitter></a>
      <IconPower className="text-black"></IconPower>
      <IconSettings className="text-grey"></IconSettings>
      <a href="https://www.github.com/tabler/tabler" target="_blank" rel="noreferrer"><IconBrandGithub className="text-github"></IconBrandGithub></a>
    </div>
      <div className="center">
        <IconBellRinging></IconBellRinging>
        <IconBellRinging2></IconBellRinging2>
        <IconBellRingingFilled></IconBellRingingFilled>
        <IconBellRinging2Filled></IconBellRinging2Filled>
      </div>
      <div className="right">
<button className="btn btn-success w-50" onClick={successButtonOnclick}>Successful action(OK)</button>
<button className="btn btn-warning w-50" onClick={warningButtonOnclick}>Uh oh this is a warning</button>
<button className="btn btn-danger w-50" onClick={dangerButtonOnclick}>This button starts WW3</button>
<button className="btn btn-info w-50" onClick={infoButtonOnclick}>Here lies useful information</button>
      </div></div></>
  );
}
// Most of the HTML uses predefined css classes that are in app.css and can be found at github.com/tabler/tabler
export default App;

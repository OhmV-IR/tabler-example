import './App.css';
import React, {useState} from 'react';
import {IconBellRinging, IconBellRinging2, IconBellRingingFilled, IconBellRinging2Filled, IconBrandPinterest, IconCloudLockOpen, IconSettings, IconPower, IconLock, IconCheck, IconBrandTwitter, IconX} from '@tabler/icons-react'
function App() {
  // adds a locked variable and creates a function called setLocked
  const [locked, setLocked] = useState(false)
  const triggerLock = async event => {
    //code to lock here
    await setLocked(true);
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
  const successButtonOnclick = async event => {
    document.getElementById("successAlert").style.display = "block";
    function resetAlert(){
      document.getElementById("successAlert").style.display = "none";
    }
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
      <p>Using the tabler package, you can add icons to represent various
        different actions and brands</p>
      <a href="https://pinterest.com"><IconBrandPinterest className="text-pinterest-red"></IconBrandPinterest></a>
      <IconX className="text-red"></IconX>
      <IconCheck className="text-green"></IconCheck>
      <a href="https://x.com"><IconBrandTwitter className="text-blue"></IconBrandTwitter></a>
      <IconPower className="text-black"></IconPower>
      <IconSettings className="text-grey"></IconSettings>
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
export default App;

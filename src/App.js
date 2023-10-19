import './App.css';
import { Analytics } from '@vercel/analytics/react';
import React, { useState, useEffect } from 'react';
import ApexCharts from 'apexcharts'
import { IconBellRinging, IconBellRingingFilled, IconBrandGithub, IconBrandPinterest, IconCloudLockOpen, IconSettings, IconPower, IconLock, IconCheck, IconBrandTwitter, IconX } from '@tabler/icons-react'

function App() {
  useEffect(() => {
    var options = {
      chart: {
        type: 'bar'
      },
      series: [{
        name: 'sales',
        data: [30,40,45,50,49,60,70,91,125]
      }],
      xaxis: {
        categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
      }
    }
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
    console.log('display chart(this code only runs once in production, it will run twice and display 2 charts in a development environment / build)');
  }, []);
  // adds a locked variable and creates a function called setLocked
  const [locked, setLocked] = useState(false)
  const [animRunning, setAnimRunning] = useState(false);
  const triggerLock = async event => {
    //code to lock here
    // setLocked function is created by react and input true/false to change the global variable
    await setLocked(true);
    // getElementsByClassName returns all the elemenets in an array so the for loop
    // iterates over them and hides each one
    var lockingDiv = document.getElementsByClassName("lockingDiv");
    for (let i = 0; i < lockingDiv.length; i++) {
      lockingDiv[i].style.display = "none";
    }
  }
  const triggerUnlock = async event => {
    // code to unlock here
    await setLocked(false);
    var lockingDiv = document.getElementsByClassName("lockingDiv");
    for (let i = 0; i < lockingDiv.length; i++) {
      lockingDiv[i].style.display = "block";
    }
  }
  // Adds an event that is triggered by clicking the connected button
  const successButtonOnclick = async event => {
    // Displays the element for 7.5s then hides it again
    var pageTitle = document.getElementById("pageTitle");
    var successAlert = document.getElementById("successAlert");
    successAlert.style.display = "block";
    pageTitle.innerHTML = "Success!";

    function resetAlert() {
      successAlert.style.display = "none";
      pageTitle.innerHTML = "tabler-example";
    }
    // Sets code to execute after 7500ms
    setTimeout(resetAlert, 7500);
  }
  const warningButtonOnclick = async event => {
    var pageTitle = document.getElementById("pageTitle");
    var warningAlert = document.getElementById("warningAlert");
    warningAlert.style.display = "block";
    pageTitle.innerHTML = "uh oh....";
    function resetAlert() {
      warningAlert.style.display = "none";
      pageTitle.innerHTML = "tabler-example";
    }
    setTimeout(resetAlert, 7500);
  }
  const dangerButtonOnclick = async event => {
    var dangerAlert = document.getElementById("dangerAlert");
    var pageTitle = document.getElementById("pageTitle");
    dangerAlert.style.display = "block";
    pageTitle.innerHTML = "dangerous thing";
    function resetAlert() {
      dangerAlert.style.display = "none";
      pageTitle.innerHTML = "tabler-example";
    }
    setTimeout(resetAlert, 7500);
  }
  const infoButtonOnclick = async event => {
    var infoAlert = document.getElementById("infoAlert");
    var pageTitle = document.getElementById("pageTitle");
    infoAlert.style.display = "block";
    pageTitle.innerHTML = "informational tab";
    function resetAlert() {
      infoAlert.style.display = "none";
      pageTitle.innerHTML = "tabler-example";
    }
    setTimeout(resetAlert, 7500);
  }
  const offToOnTransition = async event => {
    if (!animRunning) {
      var bellicon1 = document.getElementById("bellicon1")
      setAnimRunning(true);
      bellicon1.style.animation = "offToOnBell 1.75s linear 0s 1 normal"
      function resetAnim() {
        bellicon1.style.animation = "";
        bellicon1.style.display = "none";
        document.getElementById("bellicon2").style.display = "block";
        setAnimRunning(false);
      }
      setTimeout(resetAnim, "1750");
    }
  }
  const onToOffTransition = async event => {
    if (!animRunning) {
      var bellicon2 = document.getElementById("bellicon2")
      setAnimRunning(true);
      bellicon2.style.animation = "offToOnBell 1.75s linear 0s 1 reverse"
      function resetAnim() {
        bellicon2.style.animation = "";
        bellicon2.style.display = "none";
        document.getElementById("bellicon1").style.display = "block";
        setAnimRunning(false);
      }
      setTimeout(resetAnim, "1750");
    }
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
    <>
    <Analytics></Analytics>
      <title id="pageTitle">tabler-example</title>
      <div className="topRightCorner">
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
            <div id="chart"></div>
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
          <a onClick={offToOnTransition}><IconBellRinging id="bellicon1" onClick={offToOnTransition}></IconBellRinging></a>
          <a onClick={onToOffTransition}><IconBellRingingFilled id="bellicon2" onClick={onToOffTransition}></IconBellRingingFilled></a>
        </div>
        <button className="btn btn-success btn-lg button1" onClick={successButtonOnclick}>Click me! successful large button</button>
        <button className="btn btn-warning btn-sm w-25 button2" onClick={warningButtonOnclick}>Click me! warning small button</button>
        <button className="btn btn-danger w-25 button3" onClick={dangerButtonOnclick}>Click me! dangerous button 25w button</button>
        <button className="btn btn-info w-25 button4" onClick={infoButtonOnclick}>Click me! I give info 25w button</button>
        <button className="btn btn-outline-success w-25 button5">This is an outlined button</button>
        <button className="btn btn-outline-dark w-25 button6">This is a ghost button</button>
        <h4>Post tags(multiple colors, shapes .etc offered)<span class="badge bg-red text-white">Bug</span></h4>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><button className="btn btn-square btn-azure w-25 button7">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" stroke-width="0" fill="currentColor"></path>
          </svg>
          square button Facebook</button></a>
        <button className="btn btn-pill btn-lime button8 w-25">This is a lime pill button</button>
        <div id="carouselContainer">
        <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="https://picsum.photos/600" className="d-block" alt="A filler generated from lorem picsum"></img>
    </div>
    <div className="carousel-item">
    <img src="https://picsum.photos/600" className="d-block" alt="A filler generated from lorem picsum"></img>
    </div>
    <div className="carousel-item">
    <img src="https://picsum.photos/600" className="d-block" alt="A filler generated from lorem picsum"></img>
    </div>
    <div className="carousel-item">
      <img src="https://picsum.photos/600" className="d-block" alt="A filler generated from lorem picsum"></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" id="sideButton1" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" id="sideButton2" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
      </div></>
  );
}
// Most of the HTML uses predefined css classes that are in app.css and can be found at github.com/tabler/tabler
// SVGs can be found at tabler-icons.io
export default App;

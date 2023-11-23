import './App.css';
import { Analytics } from '@vercel/analytics/react';
import React, { useState, useEffect } from 'react';
import ApexCharts from 'apexcharts'
import { IconBellRinging, IconBellRingingFilled, IconBrandGithub, IconBrandPinterest, IconCloudLockOpen, IconSettings, IconPower, IconLock, IconCheck, IconBrandTwitter, IconX } from '@tabler/icons-react';
function App() {
  useEffect(() => {
    var options = {
      chart: {
        type: 'bar'
      },
      series: [{
        name: 'sales',
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
      }],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    }
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
    var percentage = 0;
    var mode = true;
    console.log('display chart(this code only runs once in production, it will run twice and display 2 charts in a development environment / build)');
    function progressBarSet() {
      if (percentage == 100) {
        mode = false;
      }
      if(percentage == 0){
        mode = true;
      }
        if(mode == true){
          percentage = percentage + 1; 
        } 
        if(mode == false){
          percentage = percentage - 1;
        }
      document.getElementById("progressBarFilled").style.width = String(percentage) + "%";
      document.getElementById("insideProgressBarText").innerHTML = String(percentage) + "%";
    }
    setInterval(progressBarSet, 75)
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
  const toggleDatagrid = async event => {
    console.log("toggle datagrid function ran")
    var datagrid = document.getElementById("datagrid");
    if(datagrid.style.display == "block"){
      datagrid.style.display = "none";
    }
    else {
      datagrid.style.display = "block";
    }
  }
  const editAccountDetails = async event => {
    console.log("edited account details");
    if(document.getElementById("formFullName").value != ""){
    document.getElementById("fullNameDatagrid").innerHTML = document.getElementById("formFullName").value;}
    // 0 for error, 1 for active, 2 for suspended, 3 for terminated
    var accountState;
    // 0 for error, 1 for standard, 2 for admin
    var accountPermissions;
    if(document.getElementById("formStandardAccount").checked){
      accountPermissions = '<span class="status status-indigo">Standard</span>';
    }
    else {
      accountPermissions = '<span class="status status-purple">Administrator</span>';
    }
    document.getElementById("avatarPicture").innerHTML = '<span className="badge bg-success"></span>' + document.getElementById("formInitials").value;
    if(document.getElementById("formActiveAccount").selected){
      accountState = '<span class="status status-green">Active</span>';
    }
    else if(document.getElementById("formSuspendedAccount").selected){
      accountState = '<span class="status status-orange">Suspended</span>';
    }
    else{
      accountState = '<span class="status status-red">Terminated</span>';
    }
    if(document.getElementById("formUsername").innerHTML != ""){
      document.getElementById("usernameDatagrid").innerHTML = document.getElementById("formUsername").value; }
      if(document.getElementById("formBio").value != ""){
    document.getElementById("bioDatagrid").innerHTML = document.getElementById("formBio").value;}
    var dateInput = new Date(document.getElementById("formDOB").value);
    if(dateInput != 'Invalid Date'){
      console.log(dateInput)
    document.getElementById("DOBDatagrid").innerHTML = String(dateInput.getMonth() + 1) + '/' + String(dateInput.getDay()) + '/' + String(dateInput.getFullYear());
    }
      document.getElementById("statusDatagrid").innerHTML = accountState + accountPermissions;
  }
  // {locked
  // ? yes condition html goes here
  // : no condition html goes here}
  /* features not working morgue lies below:
  <button type="button" className="btn btn-primary" data-bs-trigger="hover" data-bs-toggle="popover"
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
          ? <IconCloudLockOpen id="topRightIcon" onClick={triggerUnlock} />
          : <IconLock id="topRightIcon" onClick={triggerLock} />}
      </div>
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row row-cards">
            <div className="col lg-6">
              <div id="successAlert" className="alert alert-success" role="alert">Successful! Everything worked!</div>
              <div id="warningAlert" className="alert alert-warning" role="alert">Something went wrong, try again</div>
              <div id="dangerAlert" className="alert alert-danger" role="alert">Danger! World is ending in 30 seconds!!!</div>            </div></div></div></div><div className="lockingDiv">
            <span className="avatar bg-purple-lt" id="avatarPicture" onClick={toggleDatagrid}><span className="badge bg-success"></span>AB</span>
            <div className="datagrid" id="datagrid">
  <div className="datagrid-item" id="datagridItem1">
    <div className="datagrid-title">Full name</div>
    <div className="datagrid-content" id="fullNameDatagrid">-</div>
  </div>
  <div className="datagrid-item" id="datagridItem2">
    <div className="datagrid-title">Username</div>
    <div className="datagrid-content" id="usernameDatagrid">OhmVIR</div>
  </div>
  <div className="datagrid-item" id="datagridItem3">
    <div className="datagrid-title">Date of birth(MM/DD/YYYY)</div>
    <div className="datagrid-content" id="DOBDatagrid">12/26/2008</div>
  </div>
  <div className="datagrid-item" id="datagridItem4">
    <div className="datagrid-title">Account status</div>
    <div className="datagrid-content" id="statusDatagrid">
      <span className="status status-green">
        Active
      </span>
      <span className="status status-indigo">Standard</span>
    </div>
  </div>
  <div className="datagrid-item" id="datagridItem5">
    <div className="datagrid-title">Account bio</div>
    <div className="datagrid-content" id="bioDatagrid">
      Check out <a id="ytLink" href="https://www.youtube.com/channel/UCcdj0lxoqyWRM1dY3ixUr0A">OhmVIR's youtube channel</a> for the code review and explanation
    </div>
  </div>
</div>
        <div id="chart"></div>
        <div className="leftAlign">
          <p id="tablerStatement">Using the <a id="githubLink" href="https://www.github.com/tabler/tabler" target="_blank" rel="noreferrer">tabler package,</a> you can add icons representing brands and other actions to your website</p>
          <a id="pinterestLink" href="https://www.pinterest.com" target="_blank" rel="noreferrer"><IconBrandPinterest className="text-pinterest-red"></IconBrandPinterest></a>
          <IconX id="twitterIcon" className="text-red"></IconX>
          <IconCheck id="greenCheckIcon" className="text-green"></IconCheck>
          <a id="twitterLink" href="https://x.com" target="_blank" rel="noreferrer"><IconBrandTwitter className="text-blue"></IconBrandTwitter></a>
          <IconPower id="powerIcon" className="text-black"></IconPower>
          <IconSettings id="settingsCogIcon" className="text-grey"></IconSettings>
          <a id="githubLink2" href="https://www.github.com/tabler/tabler" target="_blank" rel="noreferrer"><IconBrandGithub className="text-github"></IconBrandGithub></a>
        </div>
        <div className="center">
          <a onClick={offToOnTransition}><IconBellRinging id="bellicon1" onClick={offToOnTransition}></IconBellRinging></a>
          <a onClick={onToOffTransition}><IconBellRingingFilled id="bellicon2" onClick={onToOffTransition}></IconBellRingingFilled></a>
        </div>
        <div className="progressBars">
          <h4 id="progressBarExplanation">Arbitrary progress bars</h4>
          <div id="progressBar" className="progress">
            <div id="progressBarFilled" className="progress-bar bg-green" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="50" aria-label="50% Complete">
              <span id="insideProgressBarText">0%</span>
            </div>
          </div>
          <div className="steps" id="stepsLoading">
  <a href="#" id="step1" className="step-item" data-bs-toggle="tooltip" title="Step 1 description">
    Step 1
  </a>
  <a href="#" id="step2" className="step-item" data-bs-toggle="tooltip" title="Step 2 description">
    Step 2
  </a>
  <a href="#" id="step3" className="step-item active" data-bs-toggle="tooltip" title="Step 3 description">
    Step 3
  </a>
  <span href="#" id="step4" className="step-item" data-bs-toggle="tooltip" title="Step 4 description">
    Step 4
  </span>
</div>
          <div id="spinningLoading" className="spinner-border text-purple"></div></div>
        <button type="button" id="item1" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Edit account details
</button>
<div className="modal" id="exampleModal" tabindex="-1">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Account details</h5>
        <button id="closeFormButton" type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" name="example-text-input" placeholder="Your full name" id="formFullName" />
        </div>
        <label className="form-label">Account type</label>
        <div className="form-selectgroup-boxes row mb-3">
          <div className="col-md-6">
            <label className="form-selectgroup-item">
              <input type="radio" name="report-type" value="1" className="form-selectgroup-input" checked id="formStandardAccount" />
              <span className="form-selectgroup-label d-flex align-items-center p-3">
                <span className="me-3">
                  <span className="form-selectgroup-check"></span>
                </span>
                <span className="form-selectgroup-label-content">
                  <span className="form-selectgroup-title strong mb-1">Standard</span>
                  <span className="d-block text-secondary">Only have basic access and permissions. *This does not actually change anything, but it could*</span>
                </span>
              </span>
            </label>
          </div>
          <div className="col-md-6">
            <label className="form-selectgroup-item">
              <input type="radio" name="report-type" value="1" className="form-selectgroup-input" id="formAdministratorAccount"/>
              <span className="form-selectgroup-label d-flex align-items-center p-3">
                <span className="me-3">
                  <span className="form-selectgroup-check"></span>
                </span>
                <span className="form-selectgroup-label-content">
                  <span className="form-selectgroup-title strong mb-1">Administrator</span>
                  <span className="d-block text-secondary">Have full access to the website and the highest level of permissions, allowing you to do anything you please.</span>
                </span>
              </span>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="mb-3">
              <label className="form-label">Initials for profile picture</label>
              <div className="input-group input-group-flat">
                <span className="input-group-text">
                </span>
                <input type="text" className="form-control ps-0" autocomplete="off" id="formInitials"/>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label className="form-label">Account status</label>
              <select className="form-select">
                <option value="1" selected id="formActiveAccount">Active</option>
                <option value="2" id="formSuspendedAccount">Suspended</option>
                <option value="3" id="formTerminatedAccount">Terminated</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-body">
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input type="text" className="form-control" id="formUsername"/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Date of birth</label>
              <input type="date" className="form-control" id="formDOB"/>
            </div>
          </div>
          <div className="col-lg-12">
            <div>
              <label className="form-label">Account bio</label>
              <textarea className="form-control" rows="3" id="formBio"></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#" className="btn btn-link link-secondary" data-bs-dismiss="modal">
          Cancel
        </a>
        <a href="#" id="formConfirmButton" className="btn btn-primary ms-auto text-white" data-bs-dismiss="modal" onClick={editAccountDetails}>
          Save changes
        </a>
      </div>
    </div>
  </div>
</div>
        <button id="item2" className="btn btn-success btn-lg" onClick={successButtonOnclick}>Click me! successful large button</button>
        <button id="item3" className="btn btn-warning btn-sm w-25" onClick={warningButtonOnclick}>Click me! warning small button</button>
        <button id="item4" className="btn btn-danger w-25" onClick={dangerButtonOnclick}>Click me! dangerous button 25w button</button>        <button id="item6" className="btn btn-outline-dark w-25">This is an outlined button</button>
        <button id="item5" className="btn btn-pill btn-lime w-25">This is a lime pill button</button>
        <button id="item6" type="button" className="btn btn-danger w-25">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-link" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 15l6 -6"></path>
            <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"></path>
            <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"></path>
          </svg>
          Share link
        </button>
        <h4 id="item7">Post tags(multiple colors, shapes .etc offered)<span className="badge bg-red text-white">Bug</span></h4>
        <ul class="timeline" id="timelineList">
  <li class="timeline-event">
    <div class="timeline-event-icon bg-twitter-lt">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
    </div>
    <div class="card timeline-event-card">
      <div class="card-body">
        <div class="text-secondary float-end">10 hrs ago</div>
        <h4>+1150 Followers</h4>
        <p class="text-secondary">You’re getting more and more followers, keep it up!</p>
      </div>
    </div>
  </li>
  <li class="timeline-event">
    <div class="timeline-event-icon">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
    </div>
    <div class="card timeline-event-card">
      <div class="card-body">
        <div class="text-secondary float-end">2 hrs ago</div>
        <h4>+3 New Products were added!</h4>
        <p class="text-secondary">Congratulations!</p>
      </div>
    </div>
  </li>
  <li class="timeline-event">
    <div class="timeline-event-icon">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
    </div>
    <div class="card timeline-event-card">
      <div class="card-body">
        <div class="text-secondary float-end">1 day ago</div>
        <h4>Database backup completed!</h4>
        <p class="text-secondary">Download the <a href="#">latest backup</a>.</p>
      </div>
    </div>
  </li>
</ul>
        <div id="carouselExampleIndicators" className="carousel slide w-25">
          <div className="carousel-indicators">
            <button id="carouselSlide1Button" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button id="carouselSlide2Button" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button id="carouselSlide3Button" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button id="carouselSlide4Button" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://fastly.picsum.photos/id/543/480/480.jpg?hmac=hjWk0LdfnKCvicYyJas-XQXXtYCklvO13OS7ojz4BWc" className="d-block w-100" alt="A filler generated by picsum.photos"></img>
            </div>
            <div className="carousel-item">
              <img src="https://fastly.picsum.photos/id/404/480/480.jpg?hmac=MlYra3lkNTPqvjE9tPnGRT_pC9rVVfamNHuD69rvU4s" className="d-block w-100" alt="A filler generated by picsum.photos"></img>
            </div>
            <div className="carousel-item">
              <img src="https://fastly.picsum.photos/id/741/480/480.jpg?hmac=sfNc--VFcciAV8MYR4eX2U7QKuDkMDddoZ1qyHoeqoI" className="d-block w-100" alt="A filler generated by picsum.photos"></img>
            </div>
            <div className="carousel-item">
              <img src="https://fastly.picsum.photos/id/1038/480/480.jpg?hmac=iXoWj2oNoc3qoo7qNkG7jaqxdQzjZ3Ov2eBOVSccp4A" className="d-block w-100" alt="A filler generated by picsum.photos"></img>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div id="textImageCard" className="card">
          <div id="cardImage" className="img-responsive img-responsive-21x9 card-img-top"></div>
          <div className="card-body" id="cardText">
            <h3 className="card-title">Card with title and image</h3>
            <p className="text-secondary">Secondary text</p>
          </div>
        </div>
      </div></>
  );
}
// Most of the HTML uses predefined css classes that are in app.css and can be found at github.com/tabler/tabler
// SVGs can be found at tabler-icons.io
export default App;

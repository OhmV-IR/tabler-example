import './App.css';
import React, {useState} from 'react';
import {IconBrandPinterest, IconCloudLockOpen, IconSettings, IconPower, IconLock, IconCheck, IconBrandTwitter, IconX} from '@tabler/icons-react'
function App() {
  // adds a locked variable and creates a function called setLocked
  const [locked, setLocked] = useState(false)
  const triggerLock = async event => {
    //code to lock here
    await setLocked(true);
  }
  const triggerUnlock = async event => {
    // code to unlock here
    await setLocked(false);
  }
  // {locked
  // ? yes condition html goes here
  // : no condition html goes here}
  return (
    <div className = "leftAlign">
        {locked
      ? <IconLock onClick={triggerUnlock}/>
      : <IconCloudLockOpen onClick={triggerLock}/>}
    <p>Using the tabler package, you can add icons to represent various
    different actions and brands</p>
    <a href="https://pinterest.com"><IconBrandPinterest></IconBrandPinterest></a>
    <IconX></IconX>
    <IconCheck></IconCheck>
    <a href="https://x.com"><IconBrandTwitter></IconBrandTwitter></a>
    <IconPower></IconPower>
    <IconSettings></IconSettings>
    </div>
  );
}
export default App;

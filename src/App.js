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
    <><div className="leftAlign">
      <p>Using the tabler package, you can add icons to represent various
        different actions and brands</p>
      <a href="https://pinterest.com"><IconBrandPinterest className="text-pinterest-red"></IconBrandPinterest></a>
      <IconX className="text-red"></IconX>
      <IconCheck className="text-green"></IconCheck>
      <a href="https://x.com"><IconBrandTwitter className="text-blue"></IconBrandTwitter></a>
      <IconPower></IconPower>
      <IconSettings className="text-grey"></IconSettings>
    </div><div className="topRightCorner">
        {locked
          ? <IconLock id="topRightIcon" onClick={triggerUnlock} />
          : <IconCloudLockOpen id="topRightIcon" onClick={triggerLock} />}
      </div></>
  );
}
export default App;

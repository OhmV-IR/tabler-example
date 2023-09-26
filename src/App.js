import './App.css';
import {IconBrandPinterest, IconSettings, IconPower, IconLock, IconCheck, IconX} from '@tabler/icons-react'
function App() {
  return (
    <div className = "leftAlign">
    <p>Using tabler, you can add icons to represent various
    different actions and brands</p>
    <IconBrandPinterest></IconBrandPinterest>
    <IconCheck></IconCheck>
    <IconX></IconX>
    <IconLock></IconLock>
    <IconPower></IconPower>
    <IconSettings></IconSettings>
    </div>
  );
}

export default App;

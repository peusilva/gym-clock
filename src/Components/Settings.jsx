import PropTypes from 'prop-types';

import './Settings.css'

const Settings = ({ breakLength, sessionLength, setBreak, setSession }) => {
  return (
    <div className="settings">
    <div id="break-settings">
    <h3 id="break-label">Break Length</h3>
    <div className='settings-values'>
    <button id="break-decrement" onClick={()=> setBreak((breakLength)=> breakLength -1)}>↓</button>
    <h3 id="break-length">{breakLength}</h3>
    <button id="break-increment" onClick={()=> setBreak((breakLength)=> breakLength +1)}>↑</button>
    </div>
    </div>
    <div id="session-settings">
    <h3 id="session-label">Session Length</h3>
    <div className='settings-values'>
    <button id="session-decrement" onClick={()=> setSession((sessionLength)=> sessionLength -1)}>↓</button>
    <h3 id="session-length">{sessionLength}</h3>
    <button id="session-increment"onClick={()=> setSession((sessionLength)=> sessionLength +1)}>↑</button>
    </div>
    </div>
    </div>
  )
}

Settings.propTypes = {
    breakLength: PropTypes.number,
    setBreak: PropTypes.func,
    sessionLength: PropTypes.number,
    setSession: PropTypes.func
    };

export default Settings
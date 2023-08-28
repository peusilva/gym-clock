import PropTypes from 'prop-types';

import './Settings.css'

const Settings = ({ breakLength, sessionLength, setBreak, setSession, setTimer }) => {
  return (
    <div className="settings">
    <div id="break-settings">
    <h3 id="break-label">Break Length</h3>
    <div className='settings-values'>
    <button id="break-decrement" onClick={()=> {
      if(breakLength>60){setBreak((breakLength)=> breakLength -60)}
      }}>↓</button>
    <h3 id="break-length">{breakLength/60}</h3>
    <button id="break-increment" onClick={()=> {
       if(breakLength<3600){setBreak((breakLength)=> breakLength +60)}}}>↑</button>
    </div>
    </div>
    <div id="session-settings">
    <h3 id="session-label">Session Length</h3>
    <div className='settings-values'>
    <button id="session-decrement" onClick={()=> {
      if(sessionLength>60){
      setSession((sessionLength)=> sessionLength -60);
      setTimer(sessionLength-60);
    }
    }
      }>↓</button>
    <h3 id="session-length">{sessionLength/60}</h3>
    <button id="session-increment"onClick={()=> {
      if(sessionLength<3600){
      setSession((sessionLength)=> sessionLength +60);
      setTimer(sessionLength+60);
      }
      }}>↑</button>
    </div>
    </div>
    </div>
  )
}

Settings.propTypes = {
    breakLength: PropTypes.number,
    setBreak: PropTypes.func,
    sessionLength: PropTypes.number,
    setSession: PropTypes.func,
    timer: PropTypes.number,
    setTimer: PropTypes.func
    };

export default Settings
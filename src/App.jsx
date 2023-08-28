import { useState, useEffect } from 'react'

import Display from './Components/Display'
import Settings from './Components/Settings'
import './App.css'

function App() {
  const [state, setState] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [sessionLength, setSession] = useState(1500);
  const [breakLength, setBreak] = useState(300);
  const [timer, setTimer] = useState(sessionLength);
  
  const audio = document.getElementById("beep");

  useEffect(() => {
    const interval = setInterval(() => { 
      if (timer > 0 && playing) {
      setTimer((timer)=> timer - 1)
      }
      if(timer===0){
        audio.play();
        if(state){
          setTimer(breakLength)
        }
        if(!state){
          setTimer(sessionLength)
        }
        setState(!state)
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <h2>25 + 5 Gym Clock</h2>
      <div className="card">
        <Settings 
        breakLength={breakLength}
         setBreak={setBreak}
         sessionLength={sessionLength}
         setSession={setSession}
         setTimer={setTimer}
         timer={timer}
         />
        <Display timer={timer} state={state}/>
        <div id=''>
          {/* {console.log("playing:", playing, "timer:" , timer)}
          {console.log("state",state)} */}
        <button id='start_stop' onClick={() => setPlaying(!playing)}>
        ⏯
        </button>
        <button id='reset' onClick={() => {
            setPlaying(false);
            setBreak(300);
            setSession(1500);
            setTimer(1500);
            setState(true);
            audio.pause();
            audio.currentTime = 0;
        }}>
        ↺
        </button>
        </div>
        <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
      </div>
    </>
  )
}

export default App

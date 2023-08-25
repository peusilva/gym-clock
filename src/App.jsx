import { useState, useEffect } from 'react'

import Display from './Components/Display'
import Settings from './Components/Settings'
import './App.css'

function App() {
  const [state, setState] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [sessionLength, setSession] = useState(25);
  const [breakLength, setBreak] = useState(5);
  const [timer, setTimer] = useState(sessionLength);
  

  useEffect(() => {
    const interval = setInterval(() => { 
      if (timer > 0 && playing) {
      setTimer((timer)=> timer - 1)
      }
      if(timer===0){
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
            setTimer(sessionLength);
            setBreak(5);
            setSession(5);
            setState(true);
        }}>
        ↺
        </button>
        </div>
      </div>
    </>
  )
}

export default App

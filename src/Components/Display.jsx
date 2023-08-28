import './Display.css'
import PropTypes from 'prop-types'

const Display = ( { timer, state }) => {
  const seconds = timer%60;
  const minutes = Math.floor(timer/60);

  return (
    <div id='display'>
        <h2 id="timer-label">{state && "Session"}{!state && "Break"}</h2>
        <h1 id="time-left">{minutes>=10?`${minutes}:`:`0${minutes}:`}{seconds>=10?`${seconds}`:`0${seconds}`}</h1>
    </div>
  )
}

Display.propTypes = {
timer: PropTypes.number,
state: PropTypes.bool
};


export default Display
import './Display.css'
import PropTypes from 'prop-types'

const Display = ( { timer, state }) => {
  return (
    <div id='display'>
        <h2 id="timer-label">{state && "Session"}{!state && "Break"}</h2>
        <h1 id="time-left">{timer}</h1>
    </div>
  )
}

Display.propTypes = {
timer: PropTypes.number,
state: PropTypes.bool
};


export default Display
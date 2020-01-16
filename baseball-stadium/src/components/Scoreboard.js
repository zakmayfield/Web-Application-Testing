import React from 'react';
import Display from './Display';
import Dashboard from './Dashboard';

const Scoreboard = props => {
  return (
    <div>
      <Display strike={props.strike} ball={props.ball} batterName={props.nameOfBatter}/>
      <Dashboard addHit={props.addHit} addStrike={props.addStrike} addBall={props.addBall} addFoul={props.addFoul} />
    </div>
  )
}

export default Scoreboard
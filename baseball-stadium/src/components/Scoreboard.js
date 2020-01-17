import React from 'react';
import Display from './Display';
import Dashboard from './Dashboard';

const Scoreboard = props => {
  return (
    <div>
      <Display strike={props.strike} ball={props.ball} teamName={props.teamName} outs={props.outs} handleChange={props.handleChange}/>
      <Dashboard addHit={props.addHit} addStrike={props.addStrike} addBall={props.addBall} addFoul={props.addFoul} resetBoard={props.resetBoard} />
    </div>
  )
}

export default Scoreboard
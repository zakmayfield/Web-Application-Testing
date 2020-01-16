import React, { useState } from 'react';
import Display from './Display';
import Dashboard from './Dashboard';

const Scoreboard = () => {

  const [nameOfBatter, setNameOfBatter] = useState('Jon Snow');
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);

  const addHit = () => {
    setStrike(0)
    setBall(0)
  }

  const addStrike = () => {
    if(strike >= 2){
      setStrike(0)
      setBall(0)
    } else {
      setStrike(strike + 1)
    }
  }

  const addBall = () => {
    if(ball >= 3){
      setBall(0)
      setStrike(0)
    } else {
      setBall(ball + 1)
    }
  }

  const addFoul = () => {
    // Foul logic
    // strike = 0 -> strike + 1
    // strike = 1 -> strike + 1
    // strike = 2 -> null
    if(strike <= 1){
      setStrike(strike + 1)
    }
  }

  return (
    <div>
      <h1>Scoreboard Component</h1>
      <Display strike={strike} ball={ball} name={nameOfBatter} />
      <Dashboard addHit={addHit} addStrike={addStrike} addBall={addBall} addFoul={addFoul} />
    </div>
  )
}

export default Scoreboard
import React, { useState } from 'react';
import Display from './Display';
import Dashboard from './Dashboard';

const Scoreboard = () => {

  const [nameOfBatter, setNameOfBatter] = useState('Jon Snow');
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);

  const addStrike = () => {
    if(strike >= 3){
      setStrike(0)
      setBall(0)
    } else {
      setStrike(strike + 1)
    }
  }

  const addBall = () => {
    if(ball >= 4){
      setBall(0)
      setStrike(0)
    } else {
      setBall(ball + 1)
    }
  }

  return (
    <div>
      <h1>Scoreboard Component</h1>
      <Display strike={strike} ball={ball} name={nameOfBatter} />
      <Dashboard addStrike={addStrike} addBall={addBall} />
    </div>
  )
}

export default Scoreboard
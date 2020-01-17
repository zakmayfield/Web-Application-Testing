import React, { useState, useEffect } from 'react';
import './App.css';
//component imports
import Scoreboard from './components/Scoreboard';

export const App = () => {

  const [teamName, setTeamName] = useState('Cincinnati Reds');
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [outs, setOuts] = useState(0);

  const addHit = () => {
    setStrike(0)
    setBall(0)
  }
  
  const addStrike = () => {
    if(outs >= 3){
      setOuts(0)
      setStrike(0)
      setBall(0)
    }

    if(strike >= 2){
      setOuts(outs + 1)
    } 

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
  
  const handleChange = e => {
    setTeamName(e.target.value)
  }

  return (
    <div className="App">
      <Scoreboard
        teamName={teamName}
        strike={strike}
        ball={ball}
        addHit={addHit}
        addBall={addBall}
        addFoul={addFoul}
        addStrike={addStrike}
        outs={outs}
        handleChange={handleChange}
      />
    </div>
  );
}

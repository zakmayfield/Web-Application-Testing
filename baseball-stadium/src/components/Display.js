import React from 'react';

const Display = ({ teamName, strike, ball, outs, handleChange }) => {
  return (
    <div className="displayComponent">
      <div className="displayBox">
        <div className="nameOutsBox">
          <input
            type="text"
            placeholder="enter team name"
            onChange={handleChange}
          />
          <p className="teamName">{teamName}</p>
          <p className="outsTitle">Outs: {outs}</p>
        </div>

        <div>
          <div className="strikeBox">
            <p className="strikeBoxTitle" data-testid="strikeBox">Strikes</p>
            <p className="strikeBoxNum" data-testid="strikeCount">{strike}</p>
          </div>

          <div className="ballBox">
            <p className="ballBoxTitle" data-testid="strikeBox">Balls</p>
            <p className="ballBoxNum" data-testid="ballCount">{ball}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Display
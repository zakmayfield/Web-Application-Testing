import React from 'react';

const Display = ({ nameOfBatter, strike, ball }) => {
  return (
    <div className="displayComponent">
      <div className="displayBox">
        <div>
          <p>{nameOfBatter}</p>
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
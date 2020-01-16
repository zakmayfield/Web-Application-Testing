import React from 'react';

const Display = ({ batterName, strike, ball }) => {
  return (
    <div className="displayComponent">
      <div className="displayBox">
        <div>
          <p>{batterName}</p>
        </div>

        <div>
          <div className="strikeBox">
            <p className="strikeBoxTitle">Strikes</p>
            <p className="strikeBoxNum">{strike}</p>
          </div>

          <div className="ballBox">
            <p className="ballBoxTitle">Balls</p>
            <p className="ballBoxNum">{ball}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Display
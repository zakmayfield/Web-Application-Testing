import React from 'react';

const Display = ({ strike, ball, name }) => {
  return (
    <div>
      <h1>Display Component</h1>

      <div className="displayBox">
        <div>
          <p>{name}</p>
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
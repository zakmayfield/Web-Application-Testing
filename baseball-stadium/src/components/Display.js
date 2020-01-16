import React from 'react';

const Display = (props) => {
  return (
    <div className="displayComponent">
      <div className="displayBox">
        <div>
          <p>{props.batterName}</p>
        </div>

        <div>
          <div className="strikeBox">
            <p className="strikeBoxTitle">Strikes</p>
            <p className="strikeBoxNum">{props.strike}</p>
          </div>

          <div className="ballBox">
            <p className="ballBoxTitle">Balls</p>
            <p className="ballBoxNum">{props.ball}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Display
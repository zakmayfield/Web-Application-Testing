import React from 'react';

const Dashboard = (props) => {
  return (
    <div className="dashboardComponent">
      <div className="btnBox">
        <div>
          <button onClick={props.addStrike} data-testid="strikeBtn">Strike</button>
        </div>

        <div>
          <button onClick={props.addBall} data-testid="ballBtn">Ball</button>
        </div>

        <div>
          <button onClick={props.addFoul}>Foul</button>
        </div>

        <div>
          <button onClick={props.addHit} data-testid="hitBtn">Hit</button>
        </div>

        <div>
          <button onClick={props.resetBoard}>Reset Board</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
import React from 'react';

const Dashboard = (props) => {
  return (
    <div className="dashboardComponent">
      <div className="btnBox">
        <div>
          <button onClick={props.addStrike}>Strike</button>
        </div>

        <div>
          <button onClick={props.addBall}>Ball</button>
        </div>

        <div>
          <button onClick={props.addFoul}>Foul</button>
        </div>

        <div>
          <button onClick={props.addHit}>Hit</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
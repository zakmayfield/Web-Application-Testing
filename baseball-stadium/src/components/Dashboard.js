import React from 'react';

const Dashboard = (props) => {
  return (
    <div>
      <h1>Dashboard Component</h1>

      <div>
        <div>
          <button onClick={props.addStrike}>Strike</button>
        </div>

        <div>
          <button onClick={props.addBall}>Ball</button>
        </div>

        <div>
          <button>Foul</button>
        </div>

        <div>
          <button>Hit</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
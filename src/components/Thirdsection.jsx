import React from 'react'
import { Thirddata } from './Thirddata'
import './Thirdsection.css'

function Thirdsection() {
  return (
    <div className='feature-section'>
      {Thirddata.map((feature, index) => (
        <div className="feature-card" key={index}>
          <div className="feature-icon">{feature.icon}</div>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Thirdsection
import React from 'react'
import './Headsection.css'
import symbol from '../assets/symbol.jpg'

function Headsection() {
  return (
    <div className='main_container'>
      <div className='card1'>
        <h3>Connect directly with<br></br> your dedicated designer</h3>
        <p> Forgot intermediaries you & your<br></br> team will directly collaborate with<br></br> your designer on Stack</p>
      </div>
      <div className='card1'>
        <div><img alt='' src={symbol}></img></div>
        <div>
          <h3> We take your product from <br></br>seed to series</h3>
          <p>We're more than pixel makers.We <br></br>offer the expertise to guide early <br></br>founders past common mistakes</p>
        </div>
      </div>
      <div className='card1'>
        <h3>High quality work made <br></br>entirely from scratch</h3>
        <p>  We never use templates.Instead, our <br></br>team tailors each element entirely to <br></br> your brand's unique identity</p>
      </div>
    </div>
  )
}

export default Headsection
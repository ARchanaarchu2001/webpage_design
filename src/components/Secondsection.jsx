import React from 'react'
import { Seconddata } from './Seconddata.jsx'
import picture from '../assets/symbol2.jpg'
import './Secondsection.css'

function Secondsection() {
    return (

        <div className='second_container'>
            <div className="left_section">
                <div className='title_section'>
                    <h1>Your design journey in</h1>
                    <h1 className='highlighted_text'> three effortless steps</h1>
                </div>
                <ul className='stepslist'>{Seconddata.map((val, key) => {
                    return (
                        <li key={key} className='step_item'>
                            <div className='icon'>{val.icon}</div>
                            <div className='title'>{val.title}</div>
                        </li>
                    )
                })}</ul>
            </div>
            <div className="right_section">
                <div className='picture'>
                    <img src={picture} alt=''></img>
                </div>
            </div>
        </div>
    )
}

export default Secondsection
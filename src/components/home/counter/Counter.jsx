import React from 'react'
import { counter } from '../../data/Data'
import "../../../App.css"
import CountUp from 'react-countup'
import Reveal from '../../reveal'
const Counter = () => {
  return (
    <div className="count">
        <div className="hero counter">
            <div className="  cou-grid4">  
               {counter.map((item, i)=>(
                    <>
                  <Reveal>
                        <div className='box'>

                            <i>{item.icon}</i>
                            <h1 className="heading">
                            <CountUp enableScrollSpy duration={2} end={item.num}/>
                            </h1>
                            <h3 >{item.Desc}</h3>
                        </div>
                        </Reveal>
                    </>
                 ))}
            </div> 
        </div>
    </div>
  )
}

export default Counter

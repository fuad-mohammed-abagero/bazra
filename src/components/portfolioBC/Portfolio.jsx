import React, { useState } from 'react'
// import { list } from '../data/Data'
import Heading from '../common/Heading'
import { Visibility } from '@mui/icons-material'
import { portfolio } from '../data/Data'
import Reveal from '../reveal'

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))]
const Portfolio = () => {
  const [list, setList] = useState(portfolio)
  const [category, setCategory] = useState(allCategory)

  const filterItems = (category) =>{
    const newItems = portfolio.filter((item) => item.category === category)
    setList(newItems)

    if (category === "all"){
      setList(portfolio)
    }
  }
  return (

    <div>
             <article>
                <div className="portf" data-aos="fade-down-right">
                <Heading title='Bazra Motors' data-aos="flip-left"/>

                   <div className="catButton">
                    {category.map((category) => ( 
                      <Reveal>
                      <button className='primaryBtn' onClick={() => filterItems(category)} data-aos="fade-down-right">
                        {category}
                      </button>
                      </Reveal>
                    ))}
                   </div>
               
                <div className="content po-grid3">
                {list.map((item, i)=>(
                  <Reveal>
                      <div className='box'>
                         <div className="img">
                          <img src={item.cover} alt="" draggable="false" data-aos="flip-down"/>
                         </div>
                             
                         <div className="overlay">
                              <h3 data-aos="fade-down-right">{item.title}</h3>
                              <span data-aos="fade-down-left">{item.name}</span>
                               <Visibility/>
                         </div>
                        
                      </div>
                      </Reveal>

                    ))}  
               </div> 
              </div>
          </article>
    </div>
  )
}

export default Portfolio

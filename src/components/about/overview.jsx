import React from 'react'
import "./about.css"
import { overviews} from "../data/Data"
import Reveal from '../reveal'
const Overview = () => {
  return (<>
<div class="overview elementor-section elementor-top-section elementor-element elementor-element-93f8a6f elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="93f8a6f" data-element_type="section">
  <div className='container'>
    <div className='sec_title text-center mb-70 wow fadeInUp' data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
        <h2 className='f_p f_size_30 l_height50 f_600 t_color'>
          Company Overview
        </h2>
    </div>
    <div className='row1 mb-30 new_service'>
    {overviews.map((val, i)=>( 
    <div className='col-lg-4 col-sm-6 elementor-repeater-item-b679855' >
      <Reveal>
      <div className="saas_feas_itemture text-center wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
          
          <div className='number'>{val.id}</div>
          <div className='separator'></div>
          <div className='new_service_content'>
          <img alt='Experience' data-src='' style={{ display: 'block', margin: 'auto' }} draggable="false" className="lazyloaded "  src={val.cover}/>
          <h4 className='f_size_20 f_p t_color f_500'> {val.title}</h4>
                <p className='f_400 f_size_15 mb-0'> Ethipian ownd company with 30+ years expirnce in CAR manifacturing sercive orinted company</p>
          </div>
          </div>
          </Reveal>
    </div>
    ))}

    </div>
    
  </div>
   
  </div>
  </>
  )
}

export default Overview
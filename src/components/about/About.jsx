import Overview from "./overview"
import React, { Fragment , useState,useEffect} from 'react'
import Heading from "../common/Heading"
import "./about.css"
import {motion as m} from 'framer-motion'
import Typewriter from "typewriter-effect"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import WhoWeAre from './Who_we_are';
import Dmt from './dmt'
import Aboutbourd from './aboutbourd'
import Reveal from "../reveal"
// import { overview} from "../data/Data"

export default function About() {
  const [ toggleTab, setToggletab ] = useState (1)
  const toggleState  = (index) =>  {
    setToggletab(index)
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    
     <div>
      <Aboutbourd/>
      <WhoWeAre/>
          
    <section 
        
    className='about'>
      
       
        
      <div className='row'>
      <div className='column1 '>
      <div className='about-img'></div>
</div>

      <div className='column2'data-aos="fade-down-right">
       
     
      <div className='tabs' data-aos="fade-down-right">
   <Reveal>
     <div className= {toggleTab === 1 ? "single-tab  active-tab":"single-tab"}
     onClick={() => toggleState(1)}
     >
     <h2>Misson</h2>
     </div>
     </Reveal>
     <Reveal>
     <div className= {toggleTab === 2 ? "single-tab  active-tab":"single-tab"}
     onClick={() => toggleState(2)}
     >
     <h2>Vision </h2>
      </div>
      </Reveal>
      <Reveal>
      <div className= {toggleTab === 3 ? "single-tab  active-tab":"single-tab"}
     onClick={() => toggleState(3)}
     >
     <h2>Objective</h2>
      </div>
      </Reveal>
</div>
<div className="tab-contents">
  {/* about content */}
  <Reveal>
  <div className={toggleTab === 1 ?"contents active-contents":"contents"}>
    <h2>Mition  </h2>
    < p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
     eirmod psum dolor sit amet. Lorem ipsum dolor s
      it amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo 
   Lorem ipsum dolor sit amet.</p>
   < h3> i am designer  consetetur sadipscing</h3>
   <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
     eirmod tempor invidaliquyam erat, sed diam 
     voluptua. At ore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo 
   Lorem ipsum dolor sit amet</p>

  </div>
  </Reveal>
   {/* vition content */}
   <Reveal>
   <div className={toggleTab === 2 ?"contents active-contents":"contents"}>
    <h2>company info </h2>
    < p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
     eirmod tempor invidunt utgren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor s
      it amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo 
   Lorem ipsum dolor sit amet.</p>
  
  
   <div className="vition-row">
    
    <div className="vition-column">
      <div className="progress-rap">
        <h3>developer</h3>
        <div className="progress">
          <div className="progress-bar">
            <span>80%</span>  
          </div>
        </div>
      </div>
    </div>

    <div className="vition-column">
      <div className="progress-rap">
        <h3>developer</h3>
        <div className="progress">
          <div className="progress-bar">
            <span>80%</span>  
          </div>
        </div>
      </div>
    </div>

    <div className="vition-column">
      <div className="progress-rap">
        <h3>developer</h3>
        <div className="progress">
          <div className="progress-bar">
            <span>80%</span>  
          </div>
        </div>
      </div>
    </div>

    <div className="vition-column">
      <div className="progress-rap">
        <h3>developer</h3>
        <div className="progress">
          <div className="progress-bar">
            <span>80%</span>  
          </div>
        </div>
      </div>
    </div>
  
   </div>
  </div>
  </Reveal>
{/*  objective content */}
<Reveal>
<div className={toggleTab === 3 ?"contents active-contents":"contents"}>
    <div className="ob-column">
      <h3>Objective  1</h3>
      <span> 2000-2023</span>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat minima, nemo quisquam libero nihil eveniet? Cupiditate assumenda aliquam tenetur impedit, eligendi maiores non, delectus adipisci magni alias dolore corporis itaque?</p>
    </div>
      

    <div className="ob-column">
      <h3>Objective  2 </h3>
      <span> 2000-2023</span>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat minima, nemo quisquam libero nihil eveniet? Cupiditate assumenda aliquam tenetur impedit, eligendi maiores non, delectus adipisci magni alias dolore corporis itaque?</p>
    </div>


    





  </div>

  </Reveal>


</div>
      </div>

      </div>
    
    
    <Dmt/>
    {/* <div className="container flex rl"  >

          <div className="left1 row">
          <div className='l1'>
                    <h1>any + years of exprince in the manifacturing industry</h1>

                    <Link> more infomarion ...</Link>
              </div>
          </div>
                <hr/>
          <div className="right1 row">
                 
              <p>bazra moters is a fully etiopian owned Conpany that foucuses on value mazimi
              ans is a service oriented solution provider , estavlished in ///
              
              we has been involved excludively in te areas ranging from enerpisie manifacturing sercives and business automatio intelligene to slmar i infranstructur and clud services 
              </p> 
           </div>

    </div> */}

  
 
 
  </section>  
  < Overview /> 
  
     
  </div>
    
    </>
  )
}


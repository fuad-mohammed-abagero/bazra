import React, {useEffect} from 'react'
import './blog.css'
import Headerb from './b-header'
import Posts from './posts'



const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <> <div
   
    >
    <Headerb/>
         <div className="home">
        <Posts />
        
      </div>
      </div>




    </>
  )
}

export default Blog


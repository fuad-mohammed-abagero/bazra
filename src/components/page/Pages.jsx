import React,{useEffect} from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
 import Footer from "../common/footer/Footer"
import About from "../about/About"
import Blog from "../blog/Blog"
import Singlepost from "../blog/singlepost"
import Services from "../services/Servicepage"
import Portfolio from "../portfolioBC/Portfolio"
import Contact from "../contact/contactpage"
import { AnimatePresence } from "framer-motion"
const Pages = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
    <div>
      <Router>

      
        <Header />
        <Switch>
          < AnimatePresence initial={false}  mode={"wait"} >
          <Route exact path='/' component ={Home} key={Router.pathname}/>
          <Route exact path="/about" component={About}key={Router.pathname} />
          <Route exact path='/services' component={Services}key={Router.pathname} />
          <Route exact path='/portfolio' component={Portfolio}key={Router.pathname} />
          <Route exact path='/contact' component={Contact} key={Router.pathname}/> 
          <Route exact path='/blog' component={Blog} key={Router.pathname}/> 
          <Route exact path="/blog/singlepost/:postId" component={Singlepost} key={Router.pathname} />
          <Route exact path="/blog/singlepost" component={Singlepost} key={Router.pathname}/> 
          </AnimatePresence>
        </Switch>
            
          {/*<Route exact path='/pricing' component={Pricing} />*/}
           {/* <Route exact path='/services' component={Services} />*/}
          
        
        <Footer />
        
      </Router>
      </div>
    </>
  )
}

export default Pages

import React from 'react'
import { Link } from 'gatsby'

import './index.css'

const IndexPage = () => (
  <div className="container-image">
      <div className="box" id="one"><Link to="/architects"><h4>Architects</h4></Link></div>
      <div className="box" id="two"><Link to="/buildings"><h4>Buildings</h4></Link></div>
      <div className="box" id="three"><Link to="/posts"><h4>Blog</h4></Link></div>
      <div className="box" id="four"><Link to="/events"><h4>Calendar</h4></Link></div>
      <h1 className="index-row" id="five">Building<br /> Vermont</h1><hr/>
      
      <h3 className="index-row" id="six">The Past, Present, and Future<br />of Vermont Architecture</h3>
  </div>
)

export default IndexPage

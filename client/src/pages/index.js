import React from 'react'
import { Link } from 'gatsby'

import './index.css'

const IndexPage = () => (
  <div className="container-image">
    <div className="index-row" id="index-frame">
        <h1>Building Vermont</h1>
        <h4>The Past, Present, and Future of Vermont Architecture</h4>
        <div className="box"><Link to="/architects"><h4>Architects</h4></Link></div>
        <div className="box"><Link to="/buildings"><h4>Buildings</h4></Link></div>
        <div className="box"><Link to="/posts"><h4>Blog</h4></Link></div>
        <div className="box"><Link to="/events"><h4>Calendar</h4></Link></div>
      
    </div>
  </div>
)

export default IndexPage

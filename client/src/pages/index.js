import React from 'react'
import { Link } from 'gatsby'

import './index.css'

const IndexPage = () => (
  <div className="container-image">
    <div className="index-row" id="index-frame">
        <h1>Building Vermont</h1>
        <h3>The Past, Present, and Future<br/>of Vermont Architecture</h3>
        <div className="box"><Link to="/architects"><h3>Architects</h3></Link></div>
        <div className="box"><Link to="/buildings"><h3>Buildings</h3></Link></div>
        <div className="box"><Link to="/posts"><h3>Blog</h3></Link></div>
        <div className="box"><Link to="/events"><h3>Calendar</h3></Link></div>
      
    </div>
  </div>
)

export default IndexPage

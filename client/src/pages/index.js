import React from 'react'
import { Link } from 'gatsby'

import './index.css'

const IndexPage = () => (
  <div className="container-image">
    <div className="index-row" id="index-frame">
        <h1>Building Vermont</h1>
        <h4>The Past, Present, and Future of Vermont Architecture</h4>
        <div className="box"><Link to="/architects">Architects</Link></div>
        <div className="box"><Link to="/buildings">Buildings</Link></div>
        <div className="box"><Link to="/posts">Blog</Link></div>
        <div className="box"><Link to="/events">Calendar</Link></div>
      
    </div>
  </div>
)

export default IndexPage

import React from 'react'
import { Link } from 'gatsby'

import './index.css'

const IndexPage = () => (
  <div className="index-row" id="index-frame">
    <div className="index-column" id="yesterday">
      <h1>Yesterday</h1>
      <div className="box"><Link to="/architects">Architects</Link></div>
      <div className="box"><Link to="/buildings">Buildings</Link></div>
    </div>
    <div className="index-column" id="today">
      <h1>Today</h1>
      <div className="box"><Link to="/posts">Blog</Link></div>
      <div className="box"><Link to="/events">Calendar</Link></div>
    </div>
  </div>
)

export default IndexPage

import React from 'react'
import { Link } from 'gatsby'

import './index.css'

const IndexPage = () => (
  <div className="row">
    <div className="column">
      <div>Yesterday</div>
      <div className="box"><Link to="/architects">Architects</Link></div>
      <div className="box"><Link to="/buildings">Buildings</Link></div>
    </div>
    <div className="column">
      <div>Today</div>
      <div className="box"><Link to="/posts">Blog</Link></div>
      <div className="box"><Link to="/events">Calendar</Link></div>
    </div>
  </div>
)

export default IndexPage

import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <div class="row">
    <div class="column">
      <div>Yesterday</div>
      <div><Link to="/architects">Architects</Link></div>
      <div><Link to="/buildings">Buildings</Link></div>
    </div>
    <div class="column">
      <div>Today</div>
      <div><Link to="/posts">Blog</Link></div>
      <div><Link to="/events">Calendar</Link></div>
    </div>
  </div>
)

export default IndexPage

import React, { Component } from 'react';
import { Link } from "gatsby"

class Background extends Component {
  constructor() {
    super();
    this.pictureIndex = 0;
    this.state = { picPathArray: ['../images/gatsby-astronaut.png', 'src/images/gatsby-icon.png'] }
  }

  backgroundScroll() {
    setInterval(this.setBackground, 5000);
  }
  nextBackground() {
    if (this.pictureIndex >= this.state.picPathArray.length) {
      this.pictureIndex = 0;
    }
    let picPathEnd = this.state.picPathArray[this.pictureIndex]
    this.pictureIndex++
    return picPathEnd;
  }

  render() {
    let style = {
      
        background: `url(${this.nextBackground()}) no-repeat center center fixed`, backgroundSize: "cover"
    }

    
    return (
      <div className="row" id="index-frame" style={style} >
        <div className="column" id="yesterday">
          <h1>Yesterday</h1>
          <div className="box"><Link to="/architects">Architects</Link></div>
          <div className="box"><Link to="/buildings">Buildings</Link></div>
        </div>
        <div className="column" id="today">
          <h1>Today</h1>
          <div className="box"><Link to="/posts">Blog</Link></div>
          <div className="box"><Link to="/events">Calendar</Link></div>
        </div>
    </div>
        )
      }
    }
    
export default Background;
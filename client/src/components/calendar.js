import React, { Component } from 'react';
import Calendar from 'react-calendar';

class MyCalendar extends Component {
  state = {
    date: new Date(),
    eventDate: new Date('December 25, 2018')
  }

  onChange = date => this.setState({date});

  tileContent = ({date}) => date.getDay() === 1 ? <p>It's Monday!</p> : null; 

  render() {
    return (
      <div>
        <Calendar 
        onChange={this.onChange}
        value={this.state.date}
        tileContent={this.tileContent}
        />
      </div>
    )
  }
}

export default MyCalendar
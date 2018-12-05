import React, { Component } from 'react';
import Calendar from 'react-calendar';


class MyCalendar extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({date});

  tileContent = ({date}) => date.toISOString() === new Date('December 25, 2018').toISOString() ? <p>It's Christmas!</p> : console.log(date.toISOString()); 

  render() {
    return (
      <div>
        <Calendar 
        onChange={this.onChange}
        value={this.state.date}
        tileContent={this.tileContent}
        />
        <br></br>
        <center><h4>Add an Event:</h4>
        <p>All Events must be verified by admin before being added to the calendar</p>
        </center>
        <form id='event-input' action='/#' method='post'>
          <center>
          <input type='text' placeholder='event name'></input>
          <input type='text' placeholder='description'></input>
          <br></br>
          <input type='date'></input>
          <input type='time'></input>
          <button type='submit'>Submit</button>
          </center>
        </form>
      </div>
    )
  }
};

export default MyCalendar;

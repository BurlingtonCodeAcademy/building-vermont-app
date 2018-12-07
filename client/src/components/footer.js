import React from 'react';
import './footer.css'
import { domainToASCII } from 'url';

class NameInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
        <input type="text" name="name" placeholder="name" value={this.state.value} onChange={this.handleChange} className="name-input" />
    )
  }
}

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
        <textarea value={this.state.value} name="comment" onChange={this.handleChange} className="body" />
    )
  }
}

class EmailInput extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <input type="email" name="email" value={this.state.value} placeholder="email" onChange={this.handleChange} className="email-input" />
    )
  }
}

class Footer extends React.Component{
  constructor(props) {
    super(props);
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.action = "mailto:example@domain.com"
  }

  /*
  handleSubmit(event) {  
    //mail to action here
    alert('Form was submitted');

    event.preventDefault()
  }*/

  render() {
    return (
      <div className="footer">
        <form enctype="text/plain" method="POST" action={this.action} className="contact-form">
          <NameInput />
          <EmailInput />
          <TextInput />
          <input type="submit" value="Submit" className="submit-button" />
        </form>
      </div>
    )
  }
}

export default Footer
import React from 'react';

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
        <input type="text" placeholder="name" value={this.state.value} onChange={this.handleChange} />
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
        <textarea value={this.state.value} onChange={this.handleChange} />
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
      <input type="email" value={this.state.value} placeholder="email" onChange={this.handleChange} />
    )
  }
}

class Footer extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Form was submitted');
    event.preventDefault()
  }

  render() {
    return (
      <div className="footer">
        <form onSubmit={this.handleSubmit} className="contact-form">
          <NameInput />
          <EmailInput />
          <TextInput />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Footer
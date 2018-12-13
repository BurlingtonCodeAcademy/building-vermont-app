import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import './contact.css';

export class Contact extends Component {
  constructor() {
    super();
    this.state = { subject: '', email: '', body: '', status: '' };
  }
  componentDidUpdate() {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(
      () =>
        this.setState({
          status: '',
        }),
      3000
    );
  }

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value,
    });

  handleSubmit = event => {
    event.preventDefault();
    const PATH = 'http://localhost:1337';
    const { subject, email, body } = this.state;
    fetch(`${PATH}/email`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify({ email, subject, body }), // body data type must match "Content-Type" header
    })
      .then(() =>
        this.setState({
          subject: '',
          email: '',
          body: '',
          status: 'Email sent!',
        })
      )
      .catch(() => this.setState({ status: 'Email failed to send...' }));
  };
  render() {
    return (
      <div className="contact">
        <span>{this.state.status}</span>
        <MuiThemeProvider>
          <form onSubmit={this.handleSubmit}>
            <h4
              style={{
                color: '#ddd',
                paddingRight: '0.4em',
                marginBottom: 0,
                minWidth: '11em',
              }}
            >
              Comments/Questions?
            </h4>
            <div style={{ paddingRight: '0.8em' }}>
              <label htmlFor="email address">
                <TextField
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div style={{ paddingRight: '0.8em' }}>
              <label htmlFor="subject">
                <TextField
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={this.state.subject}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div style={{ paddingRight: '0.8em' }}>
              <label htmlFor="message">
                <TextField
                  name="body"
                  placeholder="Your Message"
                  multiLine={true}
                  value={this.state.body}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <label htmlFor="send">
              <input
                type="submit"
                value="Send"
                disabled={
                  !this.state.subject || !this.state.body || !this.state.email
                }
              />
            </label>
          </form>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Contact;

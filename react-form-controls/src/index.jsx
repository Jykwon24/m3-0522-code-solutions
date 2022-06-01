import React from 'react';
import ReactDOM from 'react-dom/client';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    console.log('state:', this.state);
    event.preventDefault();
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
           <input type="text" value={this.state.username} onChange={this.handleUserChange}/>
          </label>
          <label>
            Password:
            <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
          </label>
          <button>Sign Up</button>
        </form>
    );
  }
}

root.render(<RegistrationForm />);

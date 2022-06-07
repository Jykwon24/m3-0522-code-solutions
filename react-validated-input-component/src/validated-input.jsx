import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const input = event.target.value;
    this.setState({ password: input });
  }

  render() {
    const password = this.state.password;
    let invalid;
    let alertMessage;
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*()])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z0-9!@#$%^&*()]).{8,}$/g;
    let valid = 'hidden';
    if (password === '') {
      alertMessage = 'A password is required';
      invalid = 'active-error';
    } else if (password.length < 8 && password !== '') {
      alertMessage = 'Password is too short.';
      invalid = 'active-error';
    } else if (password.length >= 8 && (!password.match(regex))) {
      alertMessage = 'Must contain at least 1 capital letter, 1 special character and 1 digit.';
      invalid = 'active-error';
    } else {
      valid = 'active-check';
      invalid = 'hidden';
    }
    return (
      <form>
        <label htmlFor="password">
          Password
          <br/>
          <div className='container'>
            <input
              name="password"
              type="password"
              value={this.state.password} onChange={this.handleInput} />
            <i className={`${invalid} fa-solid fa-xmark`}></i>
            <i className={`${valid} fa-solid fa-check`}></i>
          </div>
            <p className="alert-message">{alertMessage}</p>
        </label>
      </form>
    );
  }
}

export default ValidatedInput;

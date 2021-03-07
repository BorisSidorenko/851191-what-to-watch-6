import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from '../../api/api-actions';
import Header from '../header/header';
import Footer from '../footer/footer';

const EMAIL_ADDRESS_PATTERN = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/;
const AMOUT_OF_PASSWORD_CHARACTERS = 6;

const clearCustomValidity = (input) => {
  input.setCustomValidity(``);
  input.reportValidity();
};

const handleEmailChange = ({target}) => {
  const isValueValid = EMAIL_ADDRESS_PATTERN.test(target.value);

  if (!isValueValid) {
    target.setCustomValidity(`The entered email is not valid. Please, enter email like example@mail.com`);
    target.reportValidity();
  } else {
    clearCustomValidity(target);
  }
};

const handlePasswordChange = ({target}) => {
  const isPasswordValid = target.value.length >= AMOUT_OF_PASSWORD_CHARACTERS;

  if (!isPasswordValid) {
    target.setCustomValidity(`Your password should contain at least 6 characters.`);
    target.reportValidity();
  } else {
    clearCustomValidity(target);
  }
};

const SignIn = ({onSubmit}) => {
  const handleSubmitForm = (evt) => {
    evt.preventDefault();

    const {email, password} = evt.target;

    onSubmit({
      email: email.value,
      password: password.value
    });
  };

  return (
    <div className="user-page">
      <Header>
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmitForm}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="email" id="user-email" autoComplete="off" onChange={handleEmailChange}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="password" id="user-password" autoComplete="off" onChange={handlePasswordChange}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(data) {
    dispatch(login(data));
  }
});

export default connect(null, mapDispatchToProps)(SignIn);

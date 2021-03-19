import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from '../../api/api-actions';
import Header from '../header/header';
import Footer from '../footer/footer';
import {requireAuthorizationAction, redirectToRouteAction, loginAction} from '../../store/action';
import {AuthorizationStatus} from '../../utils/constatns';
import {getRequestedRoute} from '../../store/user/selectors';

const AMOUT_OF_PASSWORD_CHARACTERS = 6;

const SignIn = ({requestedRoute, onSubmit, setAuth, setRequireAuthorization, redirectToRoute}) => {
  const handleSubmitForm = (evt) => {
    evt.preventDefault();

    const {email, password} = evt.target;

    onSubmit({
      email: email.value,
      password: password.value
    })
      .then(({data}) => setAuth(data))
      .then(setRequireAuthorization)
      .then(() => redirectToRoute(requestedRoute));
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
              <input className="sign-in__input" type="email" placeholder="Email address" name="email" id="user-email" autoComplete="off"/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="password" id="user-password" autoComplete="off" minLength={AMOUT_OF_PASSWORD_CHARACTERS}/>
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
  requestedRoute: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setAuth: PropTypes.func.isRequired,
  setRequireAuthorization: PropTypes.func.isRequired,
  redirectToRoute: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({requestedRoute: getRequestedRoute(state)});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(formData) {
    return dispatch(login(formData));
  },
  setAuth(data) {
    dispatch(loginAction(data));
  },
  setRequireAuthorization() {
    dispatch(requireAuthorizationAction(AuthorizationStatus.AUTHORIZED));
  },
  redirectToRoute(requestedRoute) {
    dispatch(redirectToRouteAction(requestedRoute));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

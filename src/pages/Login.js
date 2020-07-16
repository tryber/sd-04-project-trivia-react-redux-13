import React from 'react';
import { connect } from 'react-redux';
import { actionAddUsers } from '../actions';

const getDataUser = (user) => {
  const valInpEmail = document.querySelector('#user-email').value;
  const valInpName = document.querySelector('#user-name').value;
  const o = {
    email: valInpEmail,
    name: valInpName,
  }
  return user(o);
};

const Login = ({ user }) => (
  <div>
    <label htmlFor="user-email">Email do Gravatar: </label>
    <input type="text" id="user-email" data-testid="input-gravatar-email" /><br />
    <label htmlFor="user-name">Nome do Jogador: </label>
    <input type="text" id="user-name" data-testid="input-player-name" /><br />
    <button onClick={() => getDataUser(user)}>JOGAR!</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  user: (email, name) => dispatch(actionAddUsers(email, name)),
});

export default connect(null, mapDispatchToProps)(Login);

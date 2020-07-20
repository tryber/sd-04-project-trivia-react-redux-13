import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { actionUserAdd, asyncActionToken } from '../actions';
import logo from '../trivia.png';
import { getElt } from '../helpers';


// Componente Login q renderiza os elementos da página inicial

class Login extends Component {
  constructor(props) {
    super(props);
    this.storeDataUser = this.storeDataUser.bind(this);
    this.state = {
      email: '',
      name: '',
      loggedin: JSON.parse(localStorage.getItem('loggedin')),
    };
  }
  
  
  // Função que despacha a action contendo os dados do usuário e
  // armazena o estado de logado no local storage

  storeDataUser() {
    const { email, name } = this.state;
    const { user, token } = this.props;
    localStorage.setItem('loggedin', JSON.stringify(true));
    this.setState({ loggedin: JSON.parse(localStorage.getItem('loggedin')) });
    token('https://opentdb.com/api_token.php?command=request');
    return user({
      email,
      name,
    });
  }


  // Função que verifica se os inputs estão preenchidos

  checkInputFill(e) {
    if (e.target.id === 'input-email') this.setState({ email: e.target.value });
    if (e.target.id === 'input-name') this.setState({ name: e.target.value });
    const btn = getElt('#btn-play');
    if (getElt('#input-email').value && getElt('#input-name').value) {
      btn.disabled = false;
      btn.addEventListener('click', this.storeDataUser);
      return true;
    }
    btn.disabled = true;
    return true;
  }

  render() {
    const { email, name, loggedin } = this.state;
    return (loggedin ? <Redirect push to="/game" /> :
      (<div>
        <Link to="/settings"><button data-testid="btn-settings">Configurações</button></Link><br />
        <img src={logo} className="App-logo" alt="logo" /><br />
        <label htmlFor="input-email">Email do Gravatar: </label>
        <input
          type="text" id="input-email" data-testid="input-gravatar-email" value={email}
          onChange={(e) => this.checkInputFill(e)}
        /><br />
        <label htmlFor="input-name">Nome do Jogador: </label>
        <input
          type="text" id="input-name" data-testid="input-player-name" value={name}
          onChange={(e) => this.checkInputFill(e)}
        /><br />
        <button
          id="btn-play" data-testid="btn-play" disabled
        >
          JOGAR!
        </button>
      </div>)
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  user: (oUser) => dispatch(actionUserAdd(oUser)),
  token: (url) => dispatch(asyncActionToken(url)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  user: PropTypes.func.isRequired,
  token: PropTypes.func.isRequired,
};

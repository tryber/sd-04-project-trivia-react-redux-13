// actions para armazenamento de dados de usuários

export const USER_ADD = 'USER_ADD';

export const actionUserAdd = (user) => ({
  type: USER_ADD,
  user,
});


// actions para armazenamento de token recebido via API

export const TOKEN_REQUEST = 'TOKEN_REQUEST';
export const TOKEN_RECEIVED = 'TOKEN_RECEIVED';
export const TOKEN_ERROR = 'TOKEN_ERROR';

export const actionTokenRequest = () => ({
  type: TOKEN_REQUEST,
});

export const actionTokenReceived = (token) => ({
  type: TOKEN_RECEIVED,
  token,
});

export const actionTokenError = (error) => ({
  type: TOKEN_ERROR,
  error,
});

export const asyncActionToken = (url) =>
  (dispatch) => {
    dispatch(actionTokenRequest());
    return fetch(url)
      .then((response) => response.json())
      .then((token) => {
        localStorage.setItem('token', JSON.stringify(token));
        return dispatch(actionTokenReceived(token));
      })
      .catch((error) => dispatch(actionTokenError(error)));
  };


// actions para armazenamento de dados de perguntas recebidas via API

export const DATA_REQUEST = 'DATA_REQUEST';
export const DATA_RECEIVED = 'DATA_RECEIVED';
export const DATA_ERROR = 'DATA_ERROR';

export const actionDataRequest = () => ({
  type: DATA_REQUEST,
});

export const actionDataReceived = (data) => ({
  type: DATA_RECEIVED,
  data,
});

export const actionDataError = (error) => ({
  type: DATA_ERROR,
  error,
});

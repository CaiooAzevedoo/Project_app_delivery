import React, { useContext, useEffect } from 'react';
import MainContext from '../Context/MainContext';
import { submitIsAllowed } from './Utils/Login.utils';

function Login() {
  const { login, setLogin } = useContext(MainContext);

  useEffect(
    () => {
      const { email, password } = login;
      if (submitIsAllowed(email, password)) {
        setLogin((prev) => ({ ...prev, submitIsDisable: false }));
      } else setLogin((prev) => ({ ...prev, submitIsDisable: true }));
    },
    [login.email, login.password],
  );

  const handleChange = ({ target: { value, name } }) => {
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form>
      <input
        type="email"
        name="email"
        data-testid="common_login__input-email"
        onChange={ handleChange }
      />
      <input
        type="password"
        name="password"
        data-testid="common_login__input-password"
        onChange={ handleChange }
      />
      <button
        type="submit"
        disabled={ login.submitIsDisable }
        data-testid="common_login__button-login"
      >
        Entrar
      </button>
      <button
        type="submit"
        disabled={ login.submitIsDisable }
        data-testid="common_login__button-register"
      >
        Cadastrar
      </button>
    </form>
  );
}

export default Login;

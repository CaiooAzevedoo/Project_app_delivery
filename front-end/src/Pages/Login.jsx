import React, { useContext, useEffect } from 'react';
import getUser from '../Api/User';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = login;
    const request = async () => {
      const { status } = await getUser({ email, password });
      const statusNotFound = 404;
      if (status === statusNotFound) {
        setLogin((prev) => ({ ...prev, notFound: true }));
      }
    };
    request();
  };

  return (
    <form onSubmit={ handleSubmit }>
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
        Cadastro
      </button>

      {
        login.notFound ? (
          <p
            data-testid="common_login__element-invalid-email"
          >
            404 - Not found
          </p>
        ) : null
      }

    </form>
  );
}

export default Login;

import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import getUser from '../Api/User';
import MainContext from '../context/MainContext';
import { submitIsAllowed } from './Utils/Login.utils';
import { setLocalstorage, getLocalStorage } from '../localstorage';
import { Main } from '../components/styles/Login';
import loginImg from '../components/styles/images/login-img.png';

function Login() {
  const { login, setLogin } = useContext(MainContext);

  const navigate = useNavigate();

  useEffect(() => {
    const data = getLocalStorage('user');
    if (data && data.role) {
      navigate('/customer/products');
    }
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = login;
    let body = {};
    const request = async () => {
      const { status, data } = await getUser({ email, password });
      setLocalstorage('user', data);
      body = data;
      const statusNotFound = 404;
      if (status === statusNotFound) {
        setLogin((prev) => ({ ...prev, notFound: true }));
      }
    };
    await request();
    if (body.token) {
      if (body.role === 'customer') {
        setLocalstorage('user', body);
        navigate('/customer/products');
      }
      if (body.role === 'administrator') {
        setLocalstorage('user', body);
        navigate('/admin/manage');
      }
      if (body.role === 'seller') {
        setLocalstorage('user', body);
        navigate('/seller/orders');
      }
    }
  };

  return (
    <Main>
      <img
        src={ loginImg }
        alt="not found"
      />
      <section className="content-login">
        <fieldset
          className="login-form"
          onSubmit={ handleSubmit }
        >
          <p className="login">Login</p>
          <input
            className="inputslogin"
            type="email"
            name="email"
            label="Email: "
            placeholder="usuario@email.com"
            data-testid="common_login__input-email"
            onChange={ handleChange }
          />
          <input
            className="inputslogin"
            type="password"
            name="password"
            label="Password: "
            placeholder="senha"
            data-testid="common_login__input-password"
            onChange={ handleChange }
          />
          <button
            className="login-btn-login"
            type="submit"
            disabled={ login.submitIsDisable }
            data-testid="common_login__button-login"
            onClick={ handleSubmit }
          >
            Entrar
          </button>
          <button
            className="login-btn-register"
            type="button"
            data-testid="common_login__button-register"
            onClick={ () => navigate('/register') }
          >
            Cadastrar
          </button>
          {
            login.notFound ? (
              <p
                className="user-not-found"
                data-testid="common_login__element-invalid-email"
              >
                Usuário não encontrado!
              </p>
            ) : null
          }

        </fieldset>
      </section>

    </Main>
  );
}

export default Login;

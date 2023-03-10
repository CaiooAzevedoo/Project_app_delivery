import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import getUser from '../Api/User';
import MainContext from '../context/MainContext';
import { submitIsAllowed } from './Utils/Login.utils';
import { setLocalstorage, getLocalStorage } from '../localstorage';
import Form, { Title, Main, Rotate } from '../components/styles/Login';

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

      <Title
        className="Icon"
      >
        <Rotate>

          🍻
        </Rotate>
      </Title>
      <Form
        className="login-form"
        onSubmit={ handleSubmit }
      >
        <section className="content-login">
          Email
          <input
            className="user-date-login"
            type="email"
            name="email"
            placeholder="user@email.com"
            data-testid="common_login__input-email"
            onChange={ handleChange }
          />
          Senha
          <input
            className="user-date-login"
            type="password"
            name="password"
            placeholder="senha..."
            data-testid="common_login__input-password"
            onChange={ handleChange }
          />
          <div className="login-btns">
            <button
              className="login-btn-entrar"
              type="submit"
              disabled={ login.submitIsDisable }
              data-testid="common_login__button-login"
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
          </div>
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
        </section>
      </Form>

    </Main>
  );
}

export default Login;

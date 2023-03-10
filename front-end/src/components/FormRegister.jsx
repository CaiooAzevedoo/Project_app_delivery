import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import validateName from './utils/RegisterValidation';
import MainContext from '../context/MainContext';
import { submitIsAllowed } from '../pages/Utils/Login.utils';
import { createUser } from '../Api/User';
import './styles/FormRegister.css';
import { setLocalstorage } from '../localstorage';

function FormRegister() {
  const { register, setRegister } = useContext(MainContext);
  const navigate = useNavigate();
  useEffect(
    () => {
      const { email, password, name } = register;
      if (submitIsAllowed(email, password) && validateName(name)) {
        setRegister((prev) => ({ ...prev, submitIsDisable: false }));
      } else setRegister((prev) => ({ ...prev, submitIsDisable: true }));
    },
    [register.email, register.password, register.name],
  );

  const handleChange = ({ target: { value, name } }) => {
    setRegister((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    let test = {};
    const request = async () => {
      const { email, password, name } = register;
      const { status, date } = await createUser({ email, password, name });
      setLocalstorage('user', date);
      test = date;
      const statusNotFound = 409;
      const statusOk = 201;
      if (status === statusOk) {
        navigate('/customer/products');
      }
      if (status === statusNotFound) {
        setRegister((prev) => ({ ...prev, notFound: true }));
      }
    };
    await request();
    console.log(test);
  };

  return (
    <form className="form-container">
      <h1>Cadastro</h1>
      <div className="user-data-container">
        <div>
          <label htmlFor="name">
            Nome
            <input
              className="user-date-register"
              type="text"
              id="name"
              name="name"
              data-testid="common_register__input-name"
              placeholder="nome"
              onChange={ handleChange }
            />
          </label>

          <label htmlFor="email">
            Email
            <input
              className="user-date-register"
              type="email"
              id="email"
              name="email"
              data-testid="common_register__input-email"
              placeholder="email@site.com.br"
              onChange={ handleChange }
            />
          </label>

          <label htmlFor="password">
            Senha
            <input
              className="user-date-register"
              type="password"
              id="password"
              name="password"
              placeholder="senha"
              data-testid="common_register__input-password"
              onChange={ handleChange }
            />
          </label>

          <button
            type="submit"
            data-testid="common_register__button-register"
            disabled={ register.submitIsDisable }
            onClick={ handleClick }
          >
            Cadastrar
          </button>
          {
            register.notFound ? (
              <p
                data-testid="common_register__element-invalid_register"
              >
                Usuário já existe!
              </p>
            ) : null
          }
        </div>
      </div>
    </form>
  );
}

export default FormRegister;

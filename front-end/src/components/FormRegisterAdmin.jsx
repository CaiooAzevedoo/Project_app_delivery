import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import validateName from './utils/RegisterValidation';
import MainContext from '../context/MainContext';
import { submitIsAllowed } from '../pages/Utils/Login.utils';
import { createUserAdm } from '../Api/User';
import Form from './styles/FormRegisterAdminSyled';

function FormRegisterAdmin({ setCount }) {
  const { register, setRegister } = useContext(MainContext);
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
    try {
      let test = {};
      const request = async () => {
        const { email, password, name, role } = register;
        const { status, date } = await createUserAdm({
          email, password, name, role });
        test = date;
        const statusNotFound = 409;
        console.log(date, 'Linha 36');
        if (status === statusNotFound) {
          setRegister((prev) => ({ ...prev, notFound: true }));
        }
      };
      await request();
      setCount((prev) => !prev);
      console.log(test, 'LINHA 42');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="form-container">
      <h1
        className="adm-title"
      >
        Cadastrar novo usuário

      </h1>

      <div className="user-data-container">
        <label
          className="user-data-name"
          htmlFor="name"
        >
          Nome:
          <input
            className="user-data-name-input"
            data-testid="admin_manage__input-name"
            placeholder="nome"
            type="text"
            id="name"
            name="name"
            onChange={ handleChange }
          />
        </label>

        <label
          className="user-data-email"
          htmlFor="email"
        >
          Email:
          <input
            className="user-data-email-input"
            data-testid="admin_manage__input-email"
            placeholder="email@site.com.br"
            type="email"
            id="email"
            name="email"
            onChange={ handleChange }
          />
        </label>

        <label
          className="user-data-password"
          htmlFor="password"
        >
          Senha:
          <input
            className="user-data-password-input"
            data-testid="admin_manage__input-password"
            placeholder="senha"
            type="password"
            id="password"
            name="password"
            onChange={ handleChange }
          />
        </label>

        <label
          className="user-data-role"
          htmlFor="role"
        >
          {' '}
          Tipo
          <select
            className="user-data-role-select"
            type="select"
            data-testid="admin_manage__select-role"
            id="role"
            name="role"
            onChange={ handleChange }
          >
            <option value="" selected disabled hidden> </option>
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
            <option value="administrator">Administrador</option>
          </select>
        </label>
        <button
          className="adm-btn-cadastrar"
          type="submit"
          data-testid="admin_manage__button-register"
          disabled={ register.submitIsDisable }
          onClick={ handleClick }
        >
          Cadastrar
        </button>
        {
          register.notFound ? (
            <p
              data-testid="admin_manage__element-invalid-register"
            >
              Usuário já existe
            </p>
          ) : null
        }
      </div>
    </Form>
  );
}

FormRegisterAdmin.propTypes = {
  setCount: PropTypes.func.isRequired,
};

export default FormRegisterAdmin;

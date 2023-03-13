import React from 'react';
import { useLocation } from 'react-router-dom';

function Form({ handleChange, handleClick, register }) {
  return (
    <form className="form-container">
      <div className="form-container-title">
        Cadastrar novo usuário
      </div>
      <div className="user-data-container">
        <label
          className="user-data-name"
          htmlFor="name"
        >
          Nome
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
          Email
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
          Senha
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
              Usuário já existe!
            </p>
          ) : null
        }
      </div>
    </form>
  );
}

export default Form;
import React from 'react';
import './styles/FormRegister.css';

function FormRegisterAdmin() {
  return (
    <form className="form-container">
      <h1>Cadastro</h1>

      <div className="user-data-container">
        <label htmlFor="name">
          Nome:
          <input
            data-testid="admin_manage__input-name"
            placeholder="nome"
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            data-testid="admin_manage__input-email"
            placeholder="email@site.com.br"
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            data-testid="admin_manage__input-password"
            placeholder="senha"
          />
        </label>

        <label htmlFor="role">
          {' '}
          Tipo
          <select
            type="select"
            data-testid="admin_manage__select-role"
          >
            <option value=""> </option>
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
            <option value="administrator">Administrador</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="admin_manage__button-register"
        >
          CADASTRAR
        </button>
      </div>
    </form>
  );
}

export default FormRegisterAdmin;

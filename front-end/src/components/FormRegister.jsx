import React from 'react';

function FormRegister() {
  return (
    <form onSubmit={ handleSubmit } className="form-container">
      <h1>Cadastro</h1>

      <div className="user-data-container">
        <label htmlFor="name">
          Nome
          <input
            type="text"
            id="name"
            name="name"
            data-testid="common_register__input-name"
            placeholder="nome"
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            data-testid="common_register__input-email"
            placeholder="email@site.com.br"
          />
        </label>

        <label htmlFor="password">
          Senha
          <input
            type="password"
            id="password"
            name="password"
            data-testid="common_register__input-password"
          />
        </label>

        <button
          type="submit"
          data-testid="common_register__button-register"
        >
          CADASTRAR
        </button>
      </div>
    </form>
  );
}

export default FormRegister;

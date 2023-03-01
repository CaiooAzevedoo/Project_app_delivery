import React from 'react';
import validateName from './utils/RegisterValidation';
import MainContext from '../context/MainContext';

function FormRegister() {
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
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="form-container">
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
            onChange={ handleChange }
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
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="password">
          Senha
          <input
            type="password"
            id="password"
            name="password"
            data-testid="common_register__input-password"
            onChange={ handleChange }
          />
        </label>

        <button
          type="submit"
          data-testid="common_register__button-register"
          disabled={ register.submitIsDisable }
        >
          CADASTRAR
        </button>
      </div>
    </form>
  );
}

export default FormRegister;

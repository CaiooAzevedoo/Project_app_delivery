import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import MainContext from '../Context/MainContext';

function LoginProvider({ children }) {
  const [login, setLogin] = useState({
    submitIsDisable: true,
    email: '',
    password: '',
  });

  const contextValue = useMemo(() => ({
    login,
    setLogin,
  }), [login]);

  return (
    <MainContext.Provider value={ contextValue }>
      {children}
    </MainContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginProvider;

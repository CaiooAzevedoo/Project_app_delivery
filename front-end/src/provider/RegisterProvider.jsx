import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import MainContext from '../context/MainContext';

function RegisterProvider({ children }) {
  const [register, setRegister] = useState({
    submitIsDisable: true,
    email: '',
    password: '',
    name: false,
    notFound: false,
    role: '',
  });

  const contextValue = useMemo(() => ({
    register,
    setRegister,
  }), [register]);

  return (
    <MainContext.Provider value={ contextValue }>
      {children}
    </MainContext.Provider>
  );
}

RegisterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RegisterProvider;

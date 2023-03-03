import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import MainContext from '../context/MainContext';

function UserProvider({ children }) {
  const [user, setUser, productsOfLocal, setProductsOfLocal] = useState([]);

  const contextValue = useMemo(() => ({
    productsOfLocal,
    setProductsOfLocal,
    user,
    setUser,
  }), [user]);

  return (
    <MainContext.Provider value={ contextValue }>
      { children }
    </MainContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;

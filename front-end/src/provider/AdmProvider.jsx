import React, { useMemo, useState } from 'react';
import MainContext from '../context/MainContext';

function AdmProvider({ children }) {
  const [adm, setAdm] = useState([]);

  const contextValue = useMemo(() => ({
    adm,
    setAdm,
  }), [user]);

  return (
    <MainContext.Provider value={ contextValue }>
      { children }
    </MainContext.Provider>
  );
}

AdmProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdmProvider;

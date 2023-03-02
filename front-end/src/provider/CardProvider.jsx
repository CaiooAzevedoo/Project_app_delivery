import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MainContext from '../context/MainContext';

function CardProvider({ children }) {
  const [cardState, setCardState] = useState({
    productsList: [{}],
  });

  const contextValue = useMemo(() => ({
    cardState,
    setCardState,
  }), [products]);

  return (
    <MainContext.Provider value={ contextValue }>
      {children}
    </MainContext.Provider>
  );
}

CardProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardProvider;

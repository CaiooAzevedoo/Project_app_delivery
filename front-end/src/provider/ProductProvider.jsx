import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import MainContext from '../context/MainContext';

function ProductProvider({ children }) {
  const [products, setProducts] = useState({
    productsList: [{}],
  });
  const [cardState, setCardState] = useState({
    orders: [],
  });

  const contextValue = useMemo(() => ({
    cardState,
    setCardState,
    products,
    setProducts,
  }), [products, cardState]);

  return (
    <MainContext.Provider value={ contextValue }>
      {children}
    </MainContext.Provider>
  );
}

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductProvider;

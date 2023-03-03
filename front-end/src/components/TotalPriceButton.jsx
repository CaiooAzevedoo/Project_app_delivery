import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLocalStorage } from '../localstorage';
import MainContext from '../context/MainContext';

function TotalPriceButton() {
  const navigate = useNavigate();
  const { cardState } = useContext(MainContext);
  const [productsOfLocal, setProductsOfLocal] = useState([]);

  useEffect(() => {
    const cardList = getLocalStorage('carrinho');
    setProductsOfLocal(cardList);
  }, [cardState]);

  const totalByProd = productsOfLocal.map((prod) => prod.price * prod.quantity);
  const initialValue = 0;
  const total = totalByProd.reduce(
    (accumulator, currentValue) => (accumulator + currentValue),
    initialValue,
  );

  return (
    <div>
      <button
        type="button"
        data-testid="customer_products__button-cart"
        disabled={ productsOfLocal.length < 1 }
        onClick={ () => navigate('/customer/checkout') }
      >
        Ver Carrinho: R$
      </button>
      <p
        data-testid="customer_products__checkout-bottom-value"
        id="total"
        name="total"
      >
        { productsOfLocal.length > 0 ? String(total.toFixed(2)).replace('.', ',') : 0}
      </p>
    </div>

  );
}

export default TotalPriceButton;

import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLocalStorage } from '../localstorage';
import MainContext from '../context/MainContext';
import Section from './styles/TotalPriceButton';

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
    <Section className="total-price-btn">
      <div className={ productsOfLocal.length < 1 ? 'disabled' : 'enable' }>
        <button
          id="customer_products__button-cart"
          type="button"
          className={ productsOfLocal.length < 1 ? 'disabled' : 'enable' }
          data-testid="customer_products__button-cart"
          disabled={ productsOfLocal.length < 1 }
          onClick={ () => navigate('/customer/checkout') }
        >
          Ver carrinho: R$
        </button>
        <p
          className={ productsOfLocal.length < 1 ? 'disabled' : 'enable' }
          data-testid="customer_products__checkout-bottom-value"
          id={ productsOfLocal.length >= 1 && 'total' }
          name="total"
        >
          { productsOfLocal.length > 0 ? String(total.toFixed(2)).replace('.', ',') : 0}
        </p>
      </div>
    </Section>

  );
}

export default TotalPriceButton;

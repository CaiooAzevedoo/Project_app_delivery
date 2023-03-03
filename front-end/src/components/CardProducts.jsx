import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles/CardProducts.css';
import MainContext from '../context/MainContext';
import { setLocalstorage } from '../localstorage';
import isAddOrRemove, { updateQuantity, calcButtonValue } from './utils/CardUtils';

function CardProducts({ iten }) {
  const { cardState, setCardState } = useContext(MainContext);
  const [buttonClicked, setButtonClicked] = useState({
    productQuantity: 0,
    id: '0',
    name: '',
    value: '',
  });

  const handleOrders = ({ target: { id, name, value } }) => {
    const decrement = -1;
    let valueQuantity = name === 'add' ? 1 : decrement;
    const orderAlreadyExists = cardState.orders.some((prod) => prod.id === Number(id));
    if (!orderAlreadyExists && isAddOrRemove(name) && buttonClicked.productQuantity > 0) {
      setCardState((prev) => (
        {
          orders: [
            ...prev.orders,
            { ...iten, quantity: 1 },
          ] }));
    } else if (isAddOrRemove(name)) {
      setCardState((prev) => (
        {
          orders: updateQuantity(prev.orders, Number(id), valueQuantity),
        }
      ));
    } else if (!orderAlreadyExists && name === 'quantity') {
      valueQuantity = Number(value);
      setCardState((prevs) => (
        {
          orders: [
            ...prevs.orders,
            {
              ...iten,
              quantity: valueQuantity,
            },
          ] }));
    } else if (name === 'quantity') {
      valueQuantity = Number(value);
      setCardState((prev) => (
        {
          orders: updateQuantity(prev.orders, Number(id), valueQuantity, true),
        }
      ));
    }
  };

  useEffect(() => {
    setLocalstorage('carrinho', cardState.orders);
  }, [cardState.orders]);

  useEffect(() => {
    const { id, name, value } = buttonClicked;
    handleOrders({ target: { id, name, value } });
  }, [buttonClicked]);

  const handleEvent = ({ target: { id, name, value } }) => {
    if (Number(value) >= 0 || (name === 'quantity' && parseInt(value, 10) >= 0)) {
      setButtonClicked((prev) => ({
        id,
        name,
        value,
        productQuantity: calcButtonValue(prev.productQuantity, name, value),
      }));
    }
  };

  return (
    <section className="card-products">
      <section>
        <p
          data-testid={ `customer_products__element-card-price-${iten.id}` }
        >
          {
            iten.price ? (iten.price.replace('.', ',')
            ) : null
          }
        </p>
        <img
          className="product-image"
          data-testid={ `customer_products__img-card-bg-image-${iten.id}` }
          src={ iten.urlImage }
          alt="imagem da bebida"
        />
        <p
          data-testid={ `customer_products__element-card-title-${iten.id}` }
        >
          {iten.name}
        </p>
        <div className="quantity-input-area">
          <button
            id={ iten.id }
            name="add"
            onClick={ handleEvent }
            className="btn-add"
            data-testid={ `customer_products__button-card-add-item-${iten.id}` }
            type="button"
          >
            +
          </button>
          <input
            value={ buttonClicked.productQuantity }
            name="quantity"
            id={ iten.id }
            onChange={ handleEvent }
            className="input-quantity"
            data-testid={ `customer_products__input-card-quantity-${iten.id}` }
            type="number"
          />
          <button
            className="btn-rm"
            name="rm"
            id={ iten.id }
            onClick={ handleEvent }
            data-testid={ `customer_products__button-card-rm-item-${iten.id}` }
            type="button"
          >
            -
          </button>
        </div>
      </section>
    </section>
  );
}

CardProducts.propTypes = {
  iten: PropTypes.objectOf.isRequired,
};

export default CardProducts;
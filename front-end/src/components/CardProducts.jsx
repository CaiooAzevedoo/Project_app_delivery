import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles/CardProducts.css';
import MainContext from '../context/MainContext';
import { setLocalstorage } from '../localstorage';
import { updateQuantity } from './utils/RegisterValidation';

function CardProducts({ iten }) {
  const { cardState, setCardState } = useContext(MainContext);
  const [buttonClicked, setButtonClicked] = useState({
    countEvents: 0,
    id: '0',
    name: '',
    value: '',
  });

  const handleOrders = ({ target: { id, name, value } }) => {
    const decrement = -1;
    let valueQuantity = name === 'add' ? 1 : decrement;
    const isAddOrRemove = name === 'add' || name === 'rm';
    const alreadyExists = cardState.orders.some((prod) => prod.id === Number(id));
    if (!alreadyExists && isAddOrRemove && buttonClicked.countEvents > 0) {
      setCardState((prev) => (
        {
          orders: [
            ...prev.orders,
            { ...iten, quantity: 1 },
          ] }));
    } else if (name === 'add' || name === 'rm') {
      setCardState((prev) => (
        {
          orders: updateQuantity(prev.orders, Number(id), valueQuantity),
        }
      ));
    } else if (!alreadyExists && name === 'quantity') {
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

  const calcEvent = (countEvents, name) => {
    console.log(countEvents, name);
    let res = 0;
    if (name === 'rm' && countEvents === 0) {
      res = 0;
    } else if (name === 'rm' && countEvents >= 1) {
      res = (countEvents - 1);
    } else if (name === 'add') {
      res += (countEvents + 1);
    }
    return res;
  };

  const handleEvent = ({ target: { id, name, value } }) => {
    setButtonClicked((prev) => ({
      countEvents: calcEvent(prev.countEvents, name),
      id,
      name,
      value,
    }));
  };

  const handleChange = ({ target: { value, name, id } }) => {
    if (Number(value) >= 0) {
      setButtonClicked(
        {
          id,
          name,
          value,
          countEvents: parseInt(value, 10),
        },
      );
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
            value={ buttonClicked.countEvents }
            name="quantity"
            id={ iten.id }
            onChange={ handleChange }
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

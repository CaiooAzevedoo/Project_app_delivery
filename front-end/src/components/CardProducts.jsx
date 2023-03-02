import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles/CardProducts.css';
import MainContext from '../context/MainContext';

function CardProducts({ iten }) {
  const { cardState, setCardState } = useContext(MainContext);
  const [inputValue, setInputValue] = useState(0);

  useEffect(() => {
    const order = cardState.orders.find((element) => element.id === Number(iten.id));
    if (order) {
      setInputValue(order.quantity);
    }
  }, [cardState.orders]);

  const updateQuantity = (array, id, quant) => {
    const newList = array.map((element) => {
      if (element.id === id) {
        return { ...element, quantity: element.quantity + quant };
      }
      return element;
    });
    return newList.filter((order) => order.quantity > 0);
  };

  const handleClick = ({ target: { id, name, value } }) => {
    const decrement = -1;
    let valueQuantity = name === 'add' ? 1 : decrement;
    if (name === 'quantity') valueQuantity = value;
    const alreadyExists = cardState.orders.some((prod) => prod.id === Number(id));
    if (!alreadyExists) {
      setCardState((prev) => (
        {
          orders: [
            ...prev.orders,
            { ...iten, quantity: 1 },
          ] }));
    } else {
      setCardState((prev) => (
        {
          orders: updateQuantity(prev.orders, Number(id), valueQuantity),
        }
      ));
    }
  };

  // const handleChange = () => {};

  return (
    <section className="card-products">
      <section>
        <p
          data-testid={ `customer_products__element-card-price-${iten.id}` }
        >
          {
            iten.price ? (
              (iten.price).replace('.', ',')
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
            onClick={ handleClick }
            className="btn-add"
            data-testid={ `customer_products__button-card-add-item-${iten.id}` }
            type="button"
          >
            +
          </button>
          <input
            value={ inputValue }
            name="quantity"
            id={ iten.id }
            onChange={ handleClick }
            className="input-quantity"
            data-testid={ `customer_products__input-card-quantity-${iten.id}` }
            type="number"
          />
          <button
            className="btn-rm"
            name="rm"
            id={ iten.id }
            onClick={ handleClick }
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

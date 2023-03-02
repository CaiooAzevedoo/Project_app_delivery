import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './styles/CardProducts.css';
import MainContext from '../context/MainContext';

function CardProducts({ iten }) {
  const { cardState, setCardState } = useContext(MainContext);

  const handleChange = ({ target: { value, name } }) => {
    
  };

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
            className="btn-add"
            data-testid={ `customer_products__button-card-add-item-${iten.id}` }
            type="button"
          >
            +
          </button>
          <input
            value={ cardState.quantity }
            name="quantity"
            className="input-quantity"
            data-testid={ `customer_products__input-card-quantity-${iten.id}` }
            type="number"
            onChange={ handleChange }
          />
          <button
            className="btn-rm"
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

import React from 'react';
import PropTypes from 'prop-types';
import './styles/CardProducts.css';

function CardProducts({ iten }) {
  return (
    <section>
      <p
        data-testid={ `customer_products__element-card-price-${iten.id}` }
      >
        {
          iten.price
        }
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${iten.id}` }
        src={ iten.urlImage }
        alt="imagem da bebida"
      />
      <p
        data-testid={ `customer_products__element-card-title-${iten.id}` }
      >
        {iten.name}
      </p>
      <div>
        <button
          data-testid={ `customer_products__button-card-add-item-${iten.id}` }
          type="button"
        >
          +
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${iten.id}` }
          type="number"
        />
        <button
          data-testid={ `customer_products__button-card-rm-item-${iten.id}` }
          type="button"
        >
          -
        </button>
      </div>
    </section>
  );
}

CardProducts.propTypes = {
  iten: PropTypes.objectOf.isRequired,
};

export default CardProducts;

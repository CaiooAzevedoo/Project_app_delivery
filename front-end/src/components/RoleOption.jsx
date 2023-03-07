import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getSellers from '../Api/Seller';
// import { setLocalstorage } from '../localstorage';

function RoleOption({ setSellerId }) {
  const [seller, setSeller] = useState([]);
  useEffect(() => {
    const request = async () => {
      const response = await getSellers();
      setSeller(response.data);
    };

    request();
  }, []);

  useEffect(() => {
    if (seller[0]) setSellerId(seller[0].id);
  }, [seller]);

  return (
    <select
      type="number"
      data-testid="customer_checkout__select-seller"
      onChange={ ({ target: { value } }) => { setSellerId(value); } }
    >
      {
        (seller.length > 0) && (
          seller.map((iten) => (
            <option key={ iten.id } value={ iten.id }>{iten.name}</option>
          ))
        )
      }
    </select>
  );
}

RoleOption.propTypes = {
  setSellerId: PropTypes.func.isRequired,
};

export default RoleOption;

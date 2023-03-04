import React, { useState, useEffect } from 'react';
import getSellers from '../Api/Seller';
import { setLocalstorage } from '../localstorage';

function RoleOption() {
  const [seller, setSeller] = useState([]);
  useEffect(() => {
    const request = async () => {
      const response = await getSellers();
      setSeller(response);
      setLocalstorage('seller', response);
    };

    request();
  }, []);
  return (
    <select
      type="number"
      data-testid="customer_checkout__select-seller"
    >
      {
        (seller.length > 0) && (
          seller.map((iten) => (
            <option key={ iten.id } value={ iten.name }>{iten.name}</option>
          ))
        )
      }
    </select>
  );
}

export default RoleOption;

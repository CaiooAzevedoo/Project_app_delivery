import React, { useEffect, useContext } from 'react';
import { getProducts } from '../Api/User';
import MainContext from '../context/MainContext';
import CardProducts from './CardProducts';

function ListProducts() {
  const { products: { productsList }, setProducts } = useContext(MainContext);

  useEffect(() => {
    console.log('test');
    const request = async () => {
      const { date } = await getProducts();
      setProducts({ productsList: date });
    };
    request();
  }, []);

  return (
    <div>
      {
        productsList.map((iten) => (
          <CardProducts key={ iten.id } iten={ iten } />
        ))
      }
    </div>
  );
}

export default ListProducts;

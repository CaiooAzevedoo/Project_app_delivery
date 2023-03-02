import React, { useEffect, useContext } from 'react';
import { getProducts } from '../Api/User';
import MainContext from '../context/MainContext';
import CardProducts from './CardProducts';
import './styles/ListProducts.css';

function ListProducts() {
  const { products: { productsList }, setProducts } = useContext(MainContext);

  useEffect(() => {
    const request = async () => {
      const { date } = await getProducts();
      setProducts({ productsList: date });
    };
    request();
  }, []);

  return (
    <section className="main-products">
      {
        productsList[0] ? (
          productsList.map((iten) => (
            <CardProducts key={ iten.id } iten={ iten } />
          ))
        ) : null
      }
    </section>
  );
}

export default ListProducts;

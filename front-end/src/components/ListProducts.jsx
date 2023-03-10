import React, { useEffect, useContext } from 'react';
import { getProducts } from '../Api/User';
import MainContext from '../context/MainContext';
import CardProducts from './CardProducts';
import Main from './styles/ListProducts';

function ListProducts() {
  const { products: { productsList }, setProducts } = useContext(MainContext);
  useEffect(() => {
    const request = async () => {
      const { data } = await getProducts();
      setProducts((prev) => ({ ...prev, productsList: data }));
    };
    request();
  }, []);

  return (
    <Main className="main-products">
      {
        productsList[0] ? (
          productsList.map((iten) => (
            <CardProducts key={ iten.id } iten={ iten } />
          ))
        ) : null
      }
    </Main>
  );
}

export default ListProducts;

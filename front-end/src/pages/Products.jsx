import React from 'react';
import ListProducts from '../components/ListProducts';
import NavBar from '../components/NavBar';
import TotalPriceButton from '../components/TotalPriceButton';

function Products() {
  return (
    <div>
      <NavBar />
      <ListProducts />
      <TotalPriceButton />
    </div>
  );
}

export default Products;

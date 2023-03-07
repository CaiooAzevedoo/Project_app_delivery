import { getLocalStorage } from '../../localstorage';

const removeItenLocalStorage = (key, id) => {
  const conversionBase = 10;
  const currentList = getLocalStorage(key);
  const newList = currentList.filter((iten) => (
    parseInt(iten.id, conversionBase) !== parseInt(id, conversionBase)));
  return newList;
};

export const calcTotalPrice = (items) => {
  const totalByProd = items.map((prod) => prod.price * prod.quantity);
  const initialValue = 0;
  const totalPrice = totalByProd.reduce(
    (accumulator, currentValue) => (accumulator + currentValue),
    initialValue,
  );
  return totalPrice;
};

export const getIdAndQuantity = (items) => items.map((iten) => (
  { id: iten.id, quantity: iten.quantity }));

export default removeItenLocalStorage;

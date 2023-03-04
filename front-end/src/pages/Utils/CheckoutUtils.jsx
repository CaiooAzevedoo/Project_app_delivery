import { getLocalStorage } from '../../localstorage';

const removeItenLocalStorage = (key, id) => {
  const conversionBase = 10;
  const currentList = getLocalStorage(key);
  const newList = currentList.filter((iten) => (
    parseInt(iten.id, conversionBase) !== parseInt(id, conversionBase)));
  console.log(newList);
  return newList;
};

export default removeItenLocalStorage;

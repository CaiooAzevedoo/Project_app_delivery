const setLocalstorage = (payLoad) => {
  localStorage.setItem('user', JSON.stringify(payLoad));
};

const getLocalStorage = (key) => {
  const date = localStorage.getItem(key);
  return JSON.parse(date);
};

const clearLocalStorage = () => {
  localStorage.clear();
};

export {
  setLocalstorage,
  getLocalStorage,
  clearLocalStorage,
};

const setLocalstorage = (key, payLoad) => {
  localStorage.setItem(key, JSON.stringify(payLoad));
};

const getLocalStorage = (key) => {
  const date = localStorage.getItem(key);
  console.log(typeof (JSON.parse(date).token), 'ALOU', JSON.parse(date).token);
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

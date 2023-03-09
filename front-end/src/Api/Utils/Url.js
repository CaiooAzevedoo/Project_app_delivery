import { getLocalStorage } from '../../localstorage';

export const URL_LOGIN = `http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/login`;
export const URL_CREATE_USER = `http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/register`;
export const URL_GET_PRODUCTS = `http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/products`;
export const URL_POST_PRODUCTS = `http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/sales`;
export const URL_GET_SELLER = `http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/seller`;

export const URL_UPDATE_STATUS = (id) => (
  `http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/sales/${id}/status`
);

export const URL_GET_ORDERS = () => {
  const { id } = getLocalStorage('user');
  return (
    `http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/sales/seller/${id}`
  );
};

export const URL_GET_SALES = () => {
  const { id } = getLocalStorage('user');
  return (
    `http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/sales/user/${id}`
  );
};

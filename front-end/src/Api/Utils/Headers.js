// import { getLocalStorage } from '../../localstorage';
// const { token } = getLocalStorage('user');
const CONTENT_TYPE = 'application/json';

const HEADERS_POST = {
  method: 'POST',
  headers: {
    'Content-Type': CONTENT_TYPE,
  },
};

export const HEADERS_POST_PRODUCTS = {
  method: 'POST',
  headers: {
    'Content-Type': CONTENT_TYPE,
    // adicionando o althorization aqui da erro...
  },
};

export const HEADERS_GET = {
  method: 'GET',
  headers: {
    'Content-Type': CONTENT_TYPE,
  },
};

export default HEADERS_POST;

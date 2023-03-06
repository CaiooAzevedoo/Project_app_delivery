import { getLocalStorage } from '../../localstorage';

const CONTENT_TYPE = 'application/json';
const user = getLocalStorage('user');
const token = user ? user.token : null;
console.log(token);

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
    Authorization: token,
  },
};

export const HEADERS_GET = {
  method: 'GET',
  headers: {
    'Content-Type': CONTENT_TYPE,
  },
};

export default HEADERS_POST;

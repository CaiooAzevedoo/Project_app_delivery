import { getLocalStorage } from '../../localstorage';

const CONTENT_TYPE = 'application/json';
const { token } = getLocalStorage('user');

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
    Authorization: `Bearer${token}`,
  },
  credentials: 'include',
};

export const HEADERS_GET = {
  method: 'GET',
  headers: {
    'Content-Type': CONTENT_TYPE,
  },
};

export default HEADERS_POST;

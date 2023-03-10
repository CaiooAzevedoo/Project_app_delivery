import { getLocalStorage } from '../../localstorage';

const CONTENT_TYPE = 'application/json';

const HEADERS_POST = {
  method: 'POST',
  headers: {
    'Content-Type': CONTENT_TYPE,
  },
};

export const headersPostProducts = () => {
  const { token } = getLocalStorage('user');
  console.log(token, 'HEADER POST');
  return { method: 'POST',
    headers: { 'Content-Type': CONTENT_TYPE, Authorization: token },
  };
};

export const headersPostAdm = () => {
  const { token } = getLocalStorage('user');
  return { method: 'POST',
    headers: { 'Content-Type': CONTENT_TYPE, Authorization: token },
  };
};

export const HEADERS_PATCH = {
  method: 'PATCH',
  headers: {
    'Content-Type': CONTENT_TYPE,
  },
};

export const HEADERS_GET = {
  method: 'GET',
  headers: {
    'Content-Type': CONTENT_TYPE,
  },
};

export const HEADERS_DELETE = {
  method: 'DELETE',
  headers: {
    'Content-Type': CONTENT_TYPE,
  },
};

export default HEADERS_POST;

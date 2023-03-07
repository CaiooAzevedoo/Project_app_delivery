// /console.log(typeof (JSON.parse(date).token), 'ALOU', JSON.parse(date).token);
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
  console.log(token);
  return { method: 'POST',
    headers: { 'Content-Type': CONTENT_TYPE, Authorization: token },
  };
};

// export const HEADERS_POST_PRODUCTS = {
//   method: 'POST',
//   headers: {
//     'Content-Type': CONTENT_TYPE,
//     Authorization: token,
//   },
// };

export const HEADERS_GET = {
  method: 'GET',
  headers: {
    'Content-Type': CONTENT_TYPE,
  },
};

export default HEADERS_POST;

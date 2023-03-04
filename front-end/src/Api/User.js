import { URL_CREATE_USER, URL_LOGIN, URL_GET_PRODUCTS } from './Utils/Url';
import HEADERS_POST, { HEADERS_GET } from './Utils/Headers';

const getUser = async ({ email, password }) => {
  const payLoad = { email, password };
  try {
    const response = await fetch(URL_LOGIN, {
      ...HEADERS_POST,
      body: JSON.stringify(payLoad),
    });

    return {
      status: response.status,
      data: await response.json(),
    };
  } catch (error) {
    const status = 404;
    return status;
  }
};

export const createUser = async ({ name, email, password }) => {
  const payLoad = { name, email, password };
  try {
    const response = await fetch(
      URL_CREATE_USER,
      {
        ...HEADERS_POST,
        body: JSON.stringify(payLoad),
      },
    );

    return {
      status: response.status,
      date: await response.json(),
    };
  } catch (error) {
    const status = 404;
    return status;
  }
};

export const getProducts = async () => {
  try {
    const response = await fetch(URL_GET_PRODUCTS, HEADERS_GET);
    return {
      status: response.status,
      data: await response.json(),
    };
  } catch (error) {
    const status = 404;
    return status;
  }
};

export default getUser;

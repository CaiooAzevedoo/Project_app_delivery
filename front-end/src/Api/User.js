import HEADERS_POST, { HEADERS_GET } from './Utils/User';

const urlLogin = `http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/login`;
const urlCreate = `http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/register`;
const urlProducts = `http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/products`;

const getUser = async ({ email, password }) => {
  const payLoad = { email, password };
  try {
    const response = await fetch(urlLogin, {
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
      urlCreate,
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
    const response = await fetch(urlProducts, HEADERS_GET);
    return {
      status: response.status,
      date: await response.json(),
    };
  } catch (error) {
    const status = 404;
    return status;
  }
};

export default getUser;

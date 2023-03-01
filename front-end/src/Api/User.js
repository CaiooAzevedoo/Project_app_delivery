import HEADERS_POST from './Utils/User';

const url = `http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/login`;

const getUser = async ({ email, password }) => {
  const payLoad = { email, password };
  try {
    const response = await fetch(url, {
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

export default getUser;

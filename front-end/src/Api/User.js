import axios from 'axios';

const localhost = `http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/login`;

const getUser = async ({ email, password }) => {
  const payLoad = { email, password };
  try {
    const { status, data } = await axios.post(localhost, payLoad);
    return { status, data };
  } catch (error) {
    const status = 404;
    return status;
  }
};

export default getUser;

import { HEADERS_GET } from './Utils/User';

const getSellers = async (role) => {
  const payload = { role };
  try {
    const response = await fetch(URL_GET_SELLER, {
      ...HEADERS_GET,
      body: JSON.stringify(payload),
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

export default getSellers;

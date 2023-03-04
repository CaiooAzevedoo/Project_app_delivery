import { HEADERS_GET } from './Utils/User';
import { URL_GET_SELLER } from './Utils/Url';

const getSellers = async () => {
  try {
    const response = await fetch(URL_GET_SELLER, {
      ...HEADERS_GET,
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

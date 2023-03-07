import { URL_GET_SALES } from './Utils/Url';
import { HEADERS_GET } from './Utils/Headers';

const getSalesByUserId = async () => {
  try {
    const response = await fetch(
      URL_GET_SALES(),
      {
        ...HEADERS_GET,
      },
    );
    return {
      status: response.status,
      data: await response.json(),
    };
  } catch (error) {
    const status = 404;
    return status;
  }
};

export default getSalesByUserId;

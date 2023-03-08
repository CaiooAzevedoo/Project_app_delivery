import { URL_GET_SALES } from './Utils/Url';
import { HEADERS_GET } from './Utils/Headers';

const getSalesByUserId = async () => {
  try {
    const response = await fetch(URL_GET_SALES(), {
      ...HEADERS_GET,
    });
    const result = await response.json();
    return {
      status: response.status,
      data: result,
    };
  } catch (error) {
    const status = 404;
    return status;
  }
};
export default getSalesByUserId;

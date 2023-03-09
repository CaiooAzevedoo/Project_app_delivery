import { HEADERS_GET } from './Utils/Headers';
import { URL_GET_ORDERS } from './Utils/Url';

const getOrderBySellerId = async () => {
  try {
    const response = await fetch(
      URL_GET_ORDERS(),
      {
        ...HEADERS_GET,
      },
    );
    const result = await response.json();
    return {
      status: response.status,
      data: result,
    };
  } catch (error) {
    const status = error;
    return status;
  }
};

export default getOrderBySellerId;

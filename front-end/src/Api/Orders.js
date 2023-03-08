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
    console.log(await response.json(), 'TAMO AQUI');
    return {
      status: response.status,
      data: await response.json(),
    };
  } catch (error) {
    const status = 'ERRO TA AQUI';
    return status;
  }
};

export default getOrderBySellerId;

import { URL_GET_SALES, URL_GET_ORDERS, URL_UPDATE_STATUS } from './Utils/Url';
import { HEADERS_GET, HEADERS_PATCH } from './Utils/Headers';

export const getSalesByUserId = async () => {
  try {
    const response = await fetch(
      URL_GET_SALES(),
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
    const status = 404;
    return status;
  }
};

export const getSales = async () => {
  try {
    const response = await fetch(
      URL_GET_ORDERS(),
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

export const updateSales = async (payload, id) => {
  try {
    const response = await fetch(
      URL_UPDATE_STATUS(id),
      {
        ...HEADERS_PATCH,
        body: JSON.stringify({ status: payload }),
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

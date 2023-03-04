import { URL_POST_PRODUCTS } from './Utils/Url';
import HEADERS_POST from './Utils/Headers';

const postProduct = async (payLoad) => {
  try {
    const response = fetch(
      URL_POST_PRODUCTS,
      {
        ...HEADERS_POST,
        body: JSON.stringify(payLoad),
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

export default postProduct;

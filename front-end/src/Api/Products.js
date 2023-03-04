import { URL_POST_PRODUCTS } from './Utils/Url';
import HEADERS_POST from './Utils/User';

const postProduct = async (payLoad) => {
  const {
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate,
  } = payLoad;
  try {
    const response = fetch(
      URL_POST_PRODUCTS,
      {
        HEADERS_POST,
        body: {
          userId,
          sellerId,
          totalPrice,
          deliveryAddress,
          deliveryNumber,
          saleDate,
        },
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

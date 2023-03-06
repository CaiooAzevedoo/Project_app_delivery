import { URL_POST_PRODUCTS } from './Utils/Url';
import { headersPostProducts } from './Utils/Headers';

const postProduct = async (payLoad) => {
  try {
    const response = await fetch(URL_POST_PRODUCTS, { ...headersPostProducts(),
      body: JSON.stringify(payLoad) });
    return { status: response.status, data: await response.json() };
  } catch (error) { const status = 404; return status; }
};

export default postProduct;

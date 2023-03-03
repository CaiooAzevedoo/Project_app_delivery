const isAddOrRemove = (name) => name === 'add' || name === 'rm';

export const updateQuantity = (array, id, quant, input = false) => {
  const newList = array.map((element) => {
    if (element.id === id) {
      return {
        ...element,
        quantity: input ? quant : element.quantity + quant };
    }
    return element;
  });
  return newList.filter((order) => order.quantity > 0);
};

export const calcButtonValue = (productQuantity, name, quant = 0) => {
  let res = 0;
  if (name === 'rm' && productQuantity === 0) res = 0;
  else if (name === 'rm' && productQuantity >= 1) res = (productQuantity - 1);
  else if (name === 'add') res += (productQuantity + 1);
  else if (name === 'quantity' && quant >= 0) res = parseInt(quant, 10);
  return res;
};

export default isAddOrRemove;

const validateName = (name) => {
  const minLengthPassword = 12;
  return name.length >= minLengthPassword;
};

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

export default validateName;

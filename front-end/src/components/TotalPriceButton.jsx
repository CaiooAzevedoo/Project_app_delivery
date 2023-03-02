import { useNavigate } from 'react-router-dom';
// import MainContext from '../context/MainContext';

function TotalPriceButton() {
  const navigate = useNavigate();
  // const { cardList: [{ x }] } = useContext(MainContext); // pegar os dados do localStorage

  const cardList = [{ price: 2, quantity: 2 }, { price: 4, quantity: 4 }]; // mock
  const totalByProd = cardList.map((prod) => prod.price * prod.quantity);
  const initialValue = 0;
  const total = totalByProd.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );
  console.log(total);

  return (
    <div>
      <button
        dataTestId="customer_products_totalprice"
        type="button"
        name="total"
        onClick={ () => navigate('/customer/checkout') }
        disabled={ cardList.length < 1 }
      >
        `Ver Carrinho: R$ $
        {total}
        `
      </button>
    </div>

  );
}

export default TotalPriceButton;

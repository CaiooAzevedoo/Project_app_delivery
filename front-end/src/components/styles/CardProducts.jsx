import styled from 'styled-components';

const Section = styled.section`
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.13);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.452);
  
  .card-products-price {
    display: flex;
    position: relative;
    align-items: center;
    border-radius: 4px;
    left: 5%;
    top: 10px;
    z-index: 1;
    background-color: rgba(255, 129, 3, 0.384);
    width: 70px;
    height: 40px;
    p {
      margin-left: 5px;
    }
  }

  
  .product-image {
    height: 180px;
    text-align: center;
    img {
      height: 180px;
    }
  }
  
  .secund-section {
    background-color: rgba(26, 189, 26, 0.11);
    text-align: center;
    border-radius: var(--border-radius);
  }

  .quantity-input-area {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  .btn-add {
    background-color: rgb(78, 148, 79);
    border: none;
    border-radius: 4px;
    height: 30px;
    width: 30px;
  }

  .input-quantity {
    height: 28px;
    text-align: center;
    padding: 0;
    width: 50px;
    border: 1px solid #00000047;
    border-radius: 4px;
    margin: 0px 5px 0px;
  }

  .btn-rm {
    background-color: rgb(255, 131, 3);
    border: none;
    border-radius: 4px;
    height: 30px;
    width: 30px;
  }

`;

export default Section;

import styled from 'styled-components';

const Section = styled.section`
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.13);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.452);
  /* animation-fill-mode: forwards; */
  /* background-image: radial-gradient(black, red, blue); */

  :hover {
    @keyframes sizecard {
      to {
        width: 25%;
      }
    }
  }

  
  .card-products-price {
    display: flex;
    position: relative;
    align-items: center;
    border-radius: 8px;
    left: 5%;
    top: 10px;
    z-index: 1;
    background-color: #1abd1a1c;
    width: 70px;
    height: 40px;
    p {
      margin-left: 5px;
    }
  }

  
  .product-image {
    animation-name: sizecard 2s;
    height: 180px;
    text-align: center;
    img {
      height: 180px;
    }
  }
  
  .secund-section {
    background-color: aliceblue;
    text-align: center;
  }

  .quantity-input-area {
    margin: auto;
    margin-bottom: 3%;
    text-align: center;
  }

  .btn-add {
    background-color: rgb(10, 187, 10);
    border: none;
    border-radius: 8px 0.1px 0.1px 8px;
    height: 30px;
    width: 30px;
  }

  .input-quantity {
    height: 26px;
    padding: 0;
    width: 50px;
  }

  .btn-rm {
    background-color: rgba(255, 0, 0, 0.418);
    border: none;
    border-radius: 0.1px 8px 8px 0.1px;
    height: 30px;
    width: 30px;
  }

`;

export default Section;

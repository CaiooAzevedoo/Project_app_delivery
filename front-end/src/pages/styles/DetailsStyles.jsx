import styled from 'styled-components';

const Main = styled.main`
  ul {
    height: 41vh;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: rgba(241, 241, 241, 0);
    }

    ::-webkit-scrollbar-thumb {
      background: rgba(114, 90, 90, 0);
    }

    ::-webkit-scrollbar-thumb:hover {
      background: rgba(85, 85, 85, 0);
    }
  }
`;

export default Main;

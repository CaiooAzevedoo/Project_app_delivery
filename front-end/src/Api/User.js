// import axios from 'axios';

const url = `http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/login`;

const getUser =  ({ email, password }) => {
  const payLoad = { email, password };
  try {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payLoad),
    }).then(resulved => console.log(resulved.json()))
    
    return {status: 404};
  } catch (error) {
    const status = 404;
    return status;
  }
  // try {
  //   const { status, data } = await axios.post(localhost, payLoad);
  //   return { status, data };
  // } catch (error) {
  //   const status = 404;
  //   return status;
  // }
};

export default getUser;

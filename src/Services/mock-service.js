import mock from './mocks';

const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mock.data);
    }, 200);
  });
};

export default getData;

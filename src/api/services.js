import reduxifyServices from 'feathers-redux';
import reduxifyAuth from 'feathers-reduxify-authentication';

import client from './client';

const serviceMap = ['categories','models'];

const auth = reduxifyAuth(client, {
  token: 'accessToken'
});

const services = {
  ...reduxifyServices(client, serviceMap),
  auth
};

export default services;

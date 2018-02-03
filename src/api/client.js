import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import authentication from '@feathersjs/authentication-client';
import rest from '@feathersjs/rest-client';
// import io from 'socket.io-client';
import { AsyncStorage } from 'react-native';
// import Config from 'react-native-config';
import Config from '../config';
import axios from 'axios';

const restClient = rest(Config.API_URL);
// const restClient = rest("https://zahirx-191704.appspot.com");
// const restClient = rest("http://172.20.10.5:3030");
// const socket = io(Config.API_URL, { transports: ['websocket'], forceNew: true });

const client = feathers()
  .configure(restClient.axios(axios))
  // .configure(socketio(socket, {
  //   pingInterval: 10000,
  //   pingTimeout: 50000
  // }))
  // .configure(hooks())
  .configure(
    authentication({
      storage: AsyncStorage
    })
  );

export default client;

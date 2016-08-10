// npm install --save @horizon/client
import Horizon from '@horizon/client';

let port;
if (process.env.NODE_ENV === 'production') {
  port = 80;
} else {
  port = 8181;
}

const host = window.location.hostname + ':' + port;

const horizon = Horizon({
  secure: false,
  host: host
});

const chat = horizon('messages');
export {chat};
import Message from './app';

const msg = new Message();

msg
  .get({ token: 'token' }, 10, 'js', { page: 10 })
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

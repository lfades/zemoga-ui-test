// Add the secrets inside now-secrets.json to process.env
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  require('now-env');
}

exports.DEBUG_MODE = process.env.NODE_ENV !== 'production';

exports.MONGO_URL = process.env.MONGO_URL;

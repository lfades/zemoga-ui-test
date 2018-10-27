const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies
const withGraphql = require('next-plugin-graphql');

if (process.env.NODE_ENV !== 'production') {
  require('now-env'); // eslint-disable-line global-require, import/no-extraneous-dependencies
}
/**
 * Adds support for GraphQL files
 */
module.exports = withGraphql({
  webpack: config => {
    // The Api url comes from now secrets, by doing this it's now available
    // in the client
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.APP_URL': JSON.stringify(process.env.API_URL)
      })
    );
    return config;
  }
});

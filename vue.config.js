module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    public: 'http://localhost:8080',
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 1000,
    },
  }
}

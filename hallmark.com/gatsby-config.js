module.exports = {
  plugins: [
    "@hallmark/product",
    "@hallmark/category",
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "1234",
      },
    },
  ],
};

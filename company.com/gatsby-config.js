module.exports = {
  plugins: [
    "@company/product",
    "@company/category",
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "1234",
      },
    },
  ],
};

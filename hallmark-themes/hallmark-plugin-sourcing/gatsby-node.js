const slugify = require("@sindresorhus/slugify");

exports.createSchemaCustomization = function createSchemaCustomization({
  actions,
}) {
  const { createTypes } = actions;

  createTypes(`
    type HallmarkCard implements Node {
      id: ID!
      name: String!
      price: Float!
      category: HallmarkCategory! @link
    }
    type HallmarkCategory implements Node {
      id: ID!
      name: String!
      products: [HallmarkCard!]! @link
    }
  `);
};

exports.sourceNodes = function sourceNodes({
  actions,
  createNodeId,
  createContentDigest,
}) {
  const { createNode } = actions;

  const categoryData = {
    id: createNodeId(`category-1`),
    name: "Greeting Cards",
    slug: slugify("Greeting Cards"),
    products: [createNodeId(`card-1`)],
  };
  createNode({
    ...categoryData,
    parent: null,
    children: [],
    internal: {
      type: `HallmarkCategory`,
      contentDigest: createContentDigest(categoryData),
    },
  });

  const cardData = {
    id: createNodeId(`card-1`),
    name: "Cheesy Puns Funny Card for Dad",
    price: 3.49,
    category: categoryData.id,
    slug: slugify("Cheesy Puns Funny Card for Dad"),
  };

  createNode({
    ...cardData,
    parent: null,
    children: [],
    internal: {
      type: `HallmarkCard`,
      contentDigest: createContentDigest(cardData),
    },
  });
};

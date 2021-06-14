import * as React from "react";
import { graphql, Link } from "gatsby";
import { Box } from "@hallmark/design-system";

export default function ProductDetail({ params, data }) {
  return (
    <div>
      <h1>Card details ({params.slug})</h1>
      <Box>
        <ul>
          <li>name: {data.card.name}</li>
          <li>price: €{data.card.price}</li>
          <li>
            category:{" "}
            <Link to={`/${data.card.category.slug}/`}>
              {data.card.category.name}
            </Link>
          </li>
        </ul>
      </Box>
    </div>
  );
}

export const query = graphql`
  query ($id: String) {
    card: hallmarkCard(id: { eq: $id }) {
      name
      price
      category {
        name
        slug
      }
    }
  }
`;

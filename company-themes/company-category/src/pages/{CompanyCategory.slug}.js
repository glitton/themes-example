import * as React from "react";
import { graphql, Link } from "gatsby";

export default function ProductDetail({ params, data }) {
  return (
    <div>
      <h1>
        Category {data.category.name} ({params.slug})
      </h1>
      <ul>
        {data.category.products.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`/product/${product.slug}/`}>{product.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export const query = graphql`
  query ($id: String) {
    category: companyCategory(id: { eq: $id }) {
      name
      products {
        id
        name
        slug
      }
    }
  }
`;

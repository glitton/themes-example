import * as React from "react";
import { graphql, Link } from "gatsby";

export default function Home({ data }) {
  return (
    <main>
      <h1>
        Hi{" "}
        <span role="img" aria-label="waving">
          👋
        </span>
        ,
        <br /> welcome to hallmark.com
      </h1>

      <ul>
        {data.allHallmarkCategory.nodes.map((category) => {
          return (
            <li key={category.id}>
              <Link to={`/${category.slug}/`}>{category.name}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export const query = graphql`
  query {
    allHallmarkCategory {
      nodes {
        id
        name
        slug
      }
    }
  }
`;

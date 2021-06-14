import * as React from "react";
import { Link } from "gatsby";
import { Box } from "@hallmark/design-system";

function Layout({ children }) {
  return (
    <div>
      <Box as="header">
        <Link to="/">HALLMARK</Link>
      </Box>
      {children}
      <Box as="footer">Footer of hallmark</Box>
    </div>
  );
}

export function wrapRootElement({ element }) {
  return <Layout>{element}</Layout>;
}

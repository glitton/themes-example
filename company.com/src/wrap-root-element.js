import * as React from "react";
import { Link } from "gatsby";
import { Box } from "@company/design-system";

function Layout({ children }) {
  return (
    <div>
      <Box as="header">
        <Link to="/">company</Link>
      </Box>
      {children}
      <Box as="footer">Footer of company</Box>
    </div>
  );
}

export function wrapRootElement({ element }) {
  return <Layout>{element}</Layout>;
}

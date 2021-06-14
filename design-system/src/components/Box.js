import * as React from "react";

export function Box({ as: Component = "div", children }) {
  return (
    <Component style={{ border: "1px solid #000", padding: "10px" }}>
      {children}
    </Component>
  );
}

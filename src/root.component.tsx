import React from "react";
import { links } from "./root.helper";
import { Link } from "@reach/router";

export default function Root(props) {
  return (
    <nav style={{ background: "steelblue", padding: "25px" }}>
      {links.map((link) => {
        return (
          <Link
            key={link.href}
            to={link.href}
            style={{ color: "white", textDecoration: "none" }}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}

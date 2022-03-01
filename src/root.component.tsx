import React from "react";
import { links } from "./root.helper";
import { Link } from "@reach/router";

import "./navigation.module.css";

export default function Root(props) {
  return (
    <nav style={{ background: "steelblue", padding: "25px" }}>
      {links.map((link) => {
        return (
          <Link key={link.href} to={link.href} replace>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}

import React from "react";
import { links } from "./root.helper";
import { Link } from "@reach/router";

import "./navigation.module.css";
import Momo from "./assets/momo.png";

export default function Root(props) {
  return (
    <nav
      style={{
        background: "steelblue",
        padding: "25px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <img
        style={{
          maxWidth: "50px",
          width: "100%",
          height: "auto",
          marginRight: "15px",
        }}
        src={Momo}
        alt="momo"
      />

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

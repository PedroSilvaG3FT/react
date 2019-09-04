import React from "react";
import logo from "../assets/img/security.svg";

export default function Main({ match }) {
  return <h1>{match.params.id}</h1>;
}

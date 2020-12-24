import React from "react";
import { Container } from "./styles/sideNav";

export default function Footer({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
}

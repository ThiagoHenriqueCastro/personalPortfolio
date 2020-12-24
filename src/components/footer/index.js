import React from "react";
import { Container, UpText, Break } from "./styles/footer";

export default function Footer({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
}

Footer.UpText = function FooterUpText({ children, ...restprops }) {
  return <UpText {...restprops}>{children}</UpText>;
};

Footer.Break = function FooterBreak({ ...restprops }) {
  return <Break {...restprops} />;
};

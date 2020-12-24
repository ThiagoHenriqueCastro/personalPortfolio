import React from "react";
import { Footer } from "../components/";

export default function FooterContainer({ children }) {
  return (
    <Footer>
      <Footer.UpText>Stay in Touch</Footer.UpText>
      <Footer.Break />
    </Footer>
  );
}

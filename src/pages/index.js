import React from "react";
import LandingContainer from "../containers/landing";
import FooterContainer from "../containers/footer";
import AboutContainer from "../containers/about";

export default function Intro() {
  return (
    <>
      <LandingContainer></LandingContainer>
      <AboutContainer></AboutContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}

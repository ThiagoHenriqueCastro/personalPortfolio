import React from "react";
import { Container, Title, TitleHolder, SubTitle, Me } from "./styles/landing";

export default function Landing({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
}

Landing.TitleHolder = function LandingTitleHolder({ children, ...restprops }) {
  return <TitleHolder {...restprops}>{children}</TitleHolder>;
};

Landing.Title = function LandingTitle({ children, ...restprops }) {
  return <Title {...restprops}>{children}</Title>;
};

Landing.SubTitle = function LandingSubTitle({ children, ...restprops }) {
  return <SubTitle {...restprops}>{children}</SubTitle>;
};

Landing.Me = function LandingMe({ ...restprops }) {
  return <Me {...restprops} />;
};

import React from "react";
import {
  Container,
  Title,
  TitleHolder,
  TitleLine,
  SliderHolder,
  Corn,
} from "./styles/body";

export default function Body({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
}

Body.TitleHolder = function BodyTitleHolder({ children, ...restprops }) {
  return <TitleHolder {...restprops}>{children}</TitleHolder>;
};

Body.TitleLine = function BodyTitleLine({ children, ...restprops }) {
  return <TitleLine {...restprops}>{children}</TitleLine>;
};

Body.Title = function BodyTitle({ children, ...restprops }) {
  return <Title {...restprops}>{children}</Title>;
};

Body.SliderHolder = function BodySliderHolder({ children, ...restprops }) {
  return <SliderHolder {...restprops}>{children}</SliderHolder>;
};

Body.Corn = function BodyCorn({ children, ...restprops }) {
  return <Corn {...restprops}>{children}</Corn>;
};

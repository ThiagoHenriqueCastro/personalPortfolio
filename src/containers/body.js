import React from "react";
import { Body } from "../components/";

import milho from "../milho.png";

export default function BodyContainer({ children }) {
  return (
    <Body>
      <Body.TitleHolder>
        <Body.TitleLine>
          <Body.Title>Aqui, &nbsp;</Body.Title>
          <Body.Title border>temos tudo</Body.Title>
        </Body.TitleLine>

        <Body.TitleLine>
          <Body.Title>para a melhor</Body.Title>
        </Body.TitleLine>

        <Body.TitleLine>
          <Body.Title>pipoca &nbsp;</Body.Title>
          <Body.Title border>da sua vida.</Body.Title>
        </Body.TitleLine>
      </Body.TitleHolder>

      <Body.SliderHolder>
        <Body.Corn src={milho} />
      </Body.SliderHolder>
    </Body>
  );
}

import React from "react";
import { Landing } from "../components/";

import me from "../me.png";

export default function LandingContainer({ children }) {
  return (
    <Landing color="#5720c6">
      <Landing.TitleHolder>
        <Landing.Title>Hello.</Landing.Title>
        <Landing.SubTitle>
          titi.co is a web developer working with enterprises to develop high
          quality web products.
        </Landing.SubTitle>
      </Landing.TitleHolder>
      <Landing.Me src={me} />
    </Landing>
  );
}

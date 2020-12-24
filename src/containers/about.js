import React from "react";
import { Landing } from "../components/";

import me from "../me.png";

export default function AboutContainer({ children }) {
  return (
    <Landing color="#9284dc">
      <Landing.Me src={me} />
      <Landing.TitleHolder>
        <Landing.Title right>Work.</Landing.Title>
        <Landing.SubTitle right>
          As a frontend developer I deliver high end web designs. I've had the
          pleasure to collaborate with top teams in the enterprises I worked
          with.
        </Landing.SubTitle>
      </Landing.TitleHolder>
    </Landing>
  );
}

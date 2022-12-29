import Breadcrumb, { routeNames } from "components/Breadcrumb";
import React from "react";
import { StyledTitleSection, StyledParagraph } from "./styles";

interface Props {
  title: string;
}

const TitleSection: React.FC<Props> = ({ title }) => {
  return (
    <StyledTitleSection>
      <Breadcrumb />
      <h1>{routeNames.about}</h1>
      <StyledParagraph>{title}</StyledParagraph>
    </StyledTitleSection>
  );
};

export default TitleSection;

import React from "react";
import { StyledContainer, StyledAbout, StyledSchedule } from "./styles";
import Link from "next/link";

const ContainerButtons: React.FC = () => {
  return (
    <StyledContainer>
      <StyledAbout>
        <Link href="/about">Quem somos</Link>
      </StyledAbout>
      <StyledSchedule>
        <Link href="/schedule">Agendar Consulta</Link>
      </StyledSchedule>
    </StyledContainer>
  );
};

export default ContainerButtons;

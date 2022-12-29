import Image from "next/image";
import React from "react";
import { StyledLogo } from "./styles";
import PokeballIconWhite from "public/images/white-pokeball.svg";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <StyledLogo>
        <Image src={PokeballIconWhite} alt="Icone de uma Pokebola" />
        <span>Centro Pokémon</span>
      </StyledLogo>
    </Link>
  );
};

export default Logo;

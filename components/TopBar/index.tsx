import React from "react";
import { StyledTopBar } from "./styles";
import { Inter } from "@next/font/google";

interface Props {
  children?: JSX.Element[];
}

const TopBar: React.FC<Props> = ({ children }: Props) => {
  return <StyledTopBar>{children}</StyledTopBar>;
};

export default TopBar;

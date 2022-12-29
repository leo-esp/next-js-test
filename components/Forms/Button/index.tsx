import React from "react";
import { StyledButton } from "./styles";

interface Props {
  text: string;
  withIcon?: boolean;
  theme?: "outlined" | "default";
  onClick: () => void;
}

const Button: React.FC<Props> = ({
  text,
  withIcon = false,
  theme = "default",
  onClick,
}) => {
  return (
    <StyledButton type="button" onClick={onClick} theme={theme}>
      {text} {withIcon && <Icon />}
    </StyledButton>
  );
};

export default Button;

const Icon = () => {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.42045 8.36932V0.323863H5.45455V8.36932H3.42045ZM0.414773 5.36364V3.32955H8.46023V5.36364H0.414773Z"
        fill="#1D1D1D"
      />
    </svg>
  );
};

import React from "react";
import { StyledInput, StyledInputForm } from "./styles";
import { StyledLabel } from "../FormStyles";

interface Props {
  label: string;
  placeholder: string;
}

const InputForm: React.FC<Props> = ({ label, placeholder }) => {
  return (
    <StyledInputForm>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput type="text" placeholder={placeholder} />
    </StyledInputForm>
  );
};

export default InputForm;

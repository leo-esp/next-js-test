import styled, { css } from "styled-components";

const DefaultButton = css`
  background-color: #e40f0f;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  border: none;
`;

const OutlinedButton = css`
  background-color: #fff;
  color: #1d1d1d;
  border: 1px solid #1d1d1d;
  font-size: 12px;
  font-weight: 700;
`;

export const StyledButton = styled.button`
  padding: 14px;
  border-radius: 30px;
  width: fit-content;
  display: flex;
  gap: 11px;
  align-items: baseline;
  cursor: pointer;

  ${(props) => props.theme === "default" && DefaultButton};
  ${(props) => props.theme === "outlined" && OutlinedButton};
`;

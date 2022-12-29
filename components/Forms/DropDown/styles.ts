import styled, { css } from "styled-components";

export const StyledInputSelect = styled.select`
  background-color: white;
  height: 45px;
  font-size: 14px;
  font-weight: 500;
  color: #747474;
  border: 1px solid #d5d5d5;
  border-radius: 8px;
  padding: 0 14px;

  & > option {
    margin-top: 8px;
  }
`;
const Disabled = css`
  opacity: 0.5;
  cursor: not-allowed;
`;
export const StyledSelectGroup = styled.div<{ isDisabled: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;

  ${(props) => props.isDisabled && Disabled}
`;

export const DropdownContainer = styled.div`
  text-align: left;
  border: 1px solid #d5d5d5;
  position: relative;
  border-radius: 5px;
  height: 45px;
`;
export const DropdownInput = styled.div`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  color: #747474;
  font-size: 14px;
`;
export const DropdownTools = styled.div``;
export const DropdownTool = styled.div``;
export const DropdownSelectedValue = styled.div``;
export const SearchBox = styled.div`
  padding: 5px;
  background-color: #fff;

  input {
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    color: #747474;
  }
`;
export const DropdownMenu = styled.div`
  transform: translateY(-8px) translateX(-1px);
  position: absolute;
  width: 100.75%;
  border: 1px solid #d5d5d5;
  border-radius: 0 0 5px 5px;
  background-color: #fff;
  overflow: auto;
  max-height: 150px;
  color: #747474;
  font-size: 14px;
  z-index: 99;

  &::-webkit-scrollbar {
    width: 1px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e40f0f;
    outline: 1px solid #e40f0f;
  }
`;
export const DropdownItem = styled.div<{ selected: boolean }>`
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: #9fc3f870;
  }

  ${({ selected }) =>
    selected &&
    `background-color: #0d6efd;
    color: #fff;`}
`;

import React from "react";
import { ChangeEvent } from "react";
import { toPascalCase } from "utils/pascalCase";
import { StyledLabel } from "../FormStyles";
import {
  DropdownContainer,
  DropdownInput,
  DropdownItem,
  DropdownMenu,
  DropdownSelectedValue,
  DropdownTool,
  DropdownTools,
  SearchBox,
  StyledInputSelect,
  StyledSelectGroup,
} from "./styles";
import Select from "react-select";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

interface Props {
  onChange: (option: { value: string; label: string }) => void;
  data: Array<string>;
  formatText?: (s: string) => string | undefined;
  label?: string;
  placeholder: string;
  isSearchable?: boolean;
  isDisabled?: boolean;
}

const DropDown: React.FC<Props> = ({
  onChange,
  data,
  formatText,
  label,
  placeholder,
  isSearchable = false,
  isDisabled = false,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef();
  const inputRef = useRef();

  const dataSelect = data.map((string) => ({
    value: string,
    label: formatText ? formatText(string) : toPascalCase(string),
  }));
  useEffect(() => {
    setSearchValue("");
    if (showMenu && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showMenu]);

  useEffect(() => {
    const handler = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    window.addEventListener("click", handler);

    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const handleInputClick = (e) => {
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue.label;
    }
    return placeholder;
  };

  const onItemClick = (option) => {
    setSelectedValue(option);
    onChange(option);
  };

  const isSelected = (option) => {
    if (!selectedValue) {
      return false;
    }
    return selectedValue.value === option.value;
  };

  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const getOptions = () => {
    if (!searchValue) {
      return dataSelect;
    }
    return dataSelect.filter(
      (option) =>
        option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
    );
  };

  return (
    <StyledSelectGroup isDisabled={isDisabled}>
      {label && <StyledLabel>{label}</StyledLabel>}
      <DropdownContainer>
        <DropdownInput ref={inputRef} onClick={handleInputClick}>
          <DropdownSelectedValue>{getDisplay()}</DropdownSelectedValue>
          <DropdownTools>
            <DropdownTool>
              <Icon />
            </DropdownTool>
          </DropdownTools>
        </DropdownInput>

        {showMenu && (
          <DropdownMenu>
            {isSearchable && (
              <SearchBox>
                <input
                  onChange={onSearch}
                  value={searchValue}
                  ref={searchRef}
                />
              </SearchBox>
            )}
            {getOptions().map((option, index) => (
              <DropdownItem
                selected={isSelected(option)}
                onClick={() => {
                  onItemClick(option);
                }}
                key={index}
              >
                {option.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        )}
      </DropdownContainer>
    </StyledSelectGroup>
  );
};

export default DropDown;

const Icon = () => {
  return (
    <svg
      width="18"
      height="15"
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.36364 14.375L0.693182 0.465908L2.92045 0.465908L9.07955 11.875L8.875 11.7727L9.30682 11.7727L9.10227 11.875L15.2614 0.465909L17.4886 0.465909L9.81818 14.375L8.36364 14.375Z"
        fill="#747474"
      />
    </svg>
  );
};

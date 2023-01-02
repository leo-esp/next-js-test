import styled from "styled-components";

export const StyledLogo = styled.div`
  padding: 0 20px;
  height: 61px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 19px;

  background: #e40f0f;
  border-radius: 50px;

  color: white;
  font-weight: 600;
  font-size: 20px;
  line-height: 24.2px;

  animation: minimize 1s linear 1s both;

  &:hover {
    animation: maxmize 0.5s linear 1s forwards;

    span {
      animation: showEl 0.5s linear 1s forwards;
    }
  }

  span {
    animation: hideEl 1s linear 1s both;
    white-space: nowrap;
    width: 162px;
    display: block;
  }

  @keyframes minimize {
    to {
      gap: 0;
      padding: 0 14px;
    }
  }
  @keyframes maxmize {
    to {
      gap: 19px;
      padding: 0 20px;
    }
  }

  @keyframes hideEl {
    to {
      display: none;
      visibility: hidden;
      opacity: 0;
      width: 0px;
    }
  }
  @keyframes showEl {
    to {
      display: block;
      visibility: visible;
      opacity: 1;
      width: 162px;
    }
  }
`;

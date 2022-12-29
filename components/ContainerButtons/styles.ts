import { Inter } from "@next/font/google";
import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

export const StyledAbout = styled.button`
  background-color: transparent;
  font-weight: 600;
  font-size: 16px;
  border: none;
  color: #000000;
`;

export const StyledSchedule = styled.button`
  background-color: #e40f0f;
  border-radius: 50px;
  border: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: white;
  padding: 12px 24px;
`;

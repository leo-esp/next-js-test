import styled from "styled-components";

export const StyledScheduleFeedback = styled.div`
  background: rgba(223, 134, 134, 0.04);
  border: 1px solid #df8686;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 34px 34px 34px;
  gap: 20px;
  h3 {
    color: #1d1d1d;
    text-align: center;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: #747474;
  }

  svg {
    min-height: 40px;
  }
`;

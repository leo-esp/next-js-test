import styled from "styled-components";

export const FormGroup = styled.div`
  display: flex;
  gap: 18px;
  color: #1d1d1d;
`;

export const StyledLabel = styled.label`
  font-size: 12px;
  font-weight: 700;
  color: #1d1d1d;
`;

export const InfoGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: #747474;
    font-size: 14px;
    font-weight: 400;
  }

  h2 {
    color: #1d1d1d;
    font-weight: 600;
  }
`;

export const InfoContainerGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InfoDisclaimer = styled.p`
  color: #747474;
  font-size: 8px;
  font-weight: 400;
`;

export const StyledForm = styled.form`
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 72px;
`;

export const FormTitle = styled.h3`
  color: #1d1d1d;
  font-size: 24px;
  font-weight: 600;
`;

export const PokeTeamGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 32px;
`;

export const ContainerFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PokeTeamItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 38px;
  align-items: baseline;
`;

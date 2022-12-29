import Button from "components/Forms/Button";
import { IconError, IconSuccess } from "components/Icons";
import React from "react";
import { StyledScheduleFeedback } from "./styles";

interface Props {
  errorMessage: string;
  date: string;
  time: string;
  pokeTeam: Array<any>;
  onClick: () => void;
}

const ScheduleFeedback: React.FC<Props> = ({
  errorMessage,
  date,
  time,
  pokeTeam,
  onClick,
}) => {
  return (
    <StyledScheduleFeedback>
      <h3>
        {errorMessage
          ? "Houve um problema no agendamento"
          : "Consulta Agendada"}
      </h3>
      {errorMessage ? <IconError /> : <IconSuccess />}
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <p>
          {`Seu agendamento para dia ${date}, às ${time.split(":")[0]}h${
            time.split(":")[1]
          }m,`}
          <br />
          {`para ${pokeTeam.length}x pokémons foi realizado com sucesso!`}
        </p>
      )}

      <Button text="Fazer Novo Agendamento" onClick={onClick} />
    </StyledScheduleFeedback>
  );
};

export default ScheduleFeedback;

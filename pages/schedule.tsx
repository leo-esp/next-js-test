import InputForm from "components/Forms/InputForm";
import TitleSection from "components/TitleSection";
import { useState } from "react";
import { formatCityName } from "utils/formatCityName";
import {
  FormGroup,
  StyledLabel,
  InfoGroup,
  InfoContainerGroup,
  InfoDisclaimer,
  StyledForm,
  FormContainer,
  FormTitle,
  PokeTeamGroup,
  ContainerFlexColumn,
  PokeTeamItem,
} from "components/Forms/FormStyles";
import { onlyUnique } from "utils/onlyUnique";
import DropDown from "components/Forms/DropDown";
import Button from "components/Forms/Button";
import ScheduleFeedback from "components/ScheduleFeedback";
import { Option, Pokemon, PokeOption } from "components/types";
interface Props {
  regions: string[];
  pokemons: any;
  dates: string[];
}

const Schedule: React.FC<Props> = ({ regions, pokemons, dates }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedDate, setSelectecDate] = useState("");
  const [selectedTime, setSelectecTime] = useState("");
  const [cities, setCities] = useState([]);
  const [pokeTeam, setPokeTeam] = useState<PokeOption[]>([]);
  const [times, setTimes] = useState<Array<string>>([]);
  const [wasScheduled, setWasScheduled] = useState(false);

  const handleSelectRegion = async (option: Option) => {
    const res = await fetch(`https://pokeapi.co/api/v2/region/${option.value}`);
    const dataCities = await res.json();
    const onlyCitiesOrTowns = dataCities.locations
      .filter(
        (city: { name: string }) =>
          city.name.includes("town") || city.name.includes("city")
      )
      .map((city: { name: string }) => {
        city.name = city.name.split("--")[0];
        return city.name;
      })
      .filter(onlyUnique);

    setCities(onlyCitiesOrTowns);
  };

  const handleSelectPokemon = async (option: Option, index: number) => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${option.value}`
    );
    const pokemonData = await res.json();
    const parts = pokemonData.generation.url.split("/");
    const generation = parseInt(parts[parts.length - 2]);
    pokeTeam[index] = {
      ...option,
      generation: generation,
    };
    setPokeTeam([...pokeTeam]);
  };

  const handleSelectDate = async (option: Option) => {
    const times = await fetch(`http://localhost:3000/api/scheduling/time`, {
      method: "POST",
      headers: [["content-type", "application/json"]],
      body: JSON.stringify({ date: option.value }),
    });
    const timesJson = await times.json();
    setTimes(timesJson);
    setSelectecDate(option.value);
  };

  const cleanStates = () => {
    setSelectecDate("");
    setSelectecTime("");
    setCities([]);
    setPokeTeam([]);
    setWasScheduled(false);
  };

  const getPokemonsToBeTreated = () =>
    pokeTeam.filter((p) => p.value !== "").length;

  const getGenerationalTax = () =>
    pokeTeam
      .reduce(
        (pv, pokemon) => pv + 70 * ((pokemon.generation as number) * 0.03),
        0
      )
      .toFixed(2)
      .toString()
      .replace(".", ",");
  return (
    <>
      <TitleSection title="Recupere seus pokémons em 5 segundos" />
      {wasScheduled && (
        <ScheduleFeedback
          date={selectedDate}
          time={selectedTime}
          errorMessage={errorMessage}
          onClick={() => {
            cleanStates();
          }}
          pokeTeam={pokeTeam}
        />
      )}
      {!wasScheduled && (
        <FormContainer>
          <FormTitle>
            Preencha o formulário abaixo para agendar sua consulta.
          </FormTitle>
          <StyledForm>
            <FormGroup>
              <InputForm label="Nome" placeholder="Digite seu nome" />
              <InputForm label="Sobrenome" placeholder="Digite seu sobrenome" />
            </FormGroup>
            <FormGroup>
              <DropDown
                placeholder="Selecione sua região"
                data={regions}
                label="Região"
                onChange={handleSelectRegion}
                isSearchable
              />
              <DropDown
                placeholder="Selecione sua cidade"
                data={cities}
                label="Cidade"
                onChange={() => {}}
                formatText={formatCityName}
                isSearchable
                isDisabled={cities.length === 0}
              />
            </FormGroup>
            <ContainerFlexColumn>
              <StyledLabel style={{ marginBottom: 8 }}>
                Cadastre seu time
              </StyledLabel>
              <h3 style={{ color: "#747474", marginBottom: 16 }}>
                Atendemos até 6 pokémons por vez
              </h3>
              <PokeTeamGroup>
                {pokeTeam.length > 0 &&
                  pokeTeam.map((pokemon, index) => (
                    <PokeTeamItem key={index}>
                      <StyledLabel>{`Pokemon 0${index + 1}`}</StyledLabel>
                      <DropDown
                        placeholder="Selecione o seu pokémon"
                        isSearchable
                        data={pokemons}
                        onChange={(option) => {
                          handleSelectPokemon(option, index);
                        }}
                      />
                    </PokeTeamItem>
                  ))}
              </PokeTeamGroup>

              {pokeTeam.length < 6 && (
                <Button
                  text="Adicionar novo pokémon ao time..."
                  withIcon
                  theme="outlined"
                  onClick={() => {
                    setPokeTeam([
                      ...pokeTeam,
                      { value: "", label: "", generation: 0 },
                    ]);
                  }}
                />
              )}
            </ContainerFlexColumn>
            <FormGroup>
              <DropDown
                placeholder="Selecione a Data"
                data={dates}
                label="Data para Atendimento"
                onChange={handleSelectDate}
              />
              <DropDown
                placeholder="Selecione o Horário"
                data={times}
                label="Horário de Atendimento"
                onChange={(option) => {
                  setSelectecTime(option.value);
                }}
                isDisabled={times.length === 0}
              />
            </FormGroup>
            <hr />
            <InfoContainerGroup>
              <InfoGroup>
                <p>Número de pokémons a serem atendidos:</p>
                <p>{getPokemonsToBeTreated()}</p>
              </InfoGroup>
              <InfoGroup>
                <p>Atendimento unitário por pokémon: </p>
                <p>R$ 70,00</p>
              </InfoGroup>
              <InfoGroup>
                <p>Subtotal:</p>
                <p>{`R$ ${getPokemonsToBeTreated() * 70},00`}</p>
              </InfoGroup>
              <InfoGroup>
                <p>Taxa geracional*: </p>
                <p>{`R$ ${getGenerationalTax()}`}</p>
              </InfoGroup>
              <InfoDisclaimer>
                *adicionamos uma taxa de 3%, multiplicado pelo número da geração
                mais alta do time, com limite de até 30%
              </InfoDisclaimer>
            </InfoContainerGroup>
            <InfoGroup>
              <h2>{`Valor Total: R$${
                getPokemonsToBeTreated() * 70 + getGenerationalTax()
              }`}</h2>
              <Button
                text="Concluir Agendamento"
                onClick={() => {
                  if (Math.random() < 0.5) {
                    setWasScheduled(true);
                    setErrorMessage(
                      "Ocorreu um erro durante o agendamento, tente novamente por favor"
                    );
                  } else {
                    setWasScheduled(true);
                  }
                }}
                theme="default"
              />
            </InfoGroup>
          </StyledForm>
        </FormContainer>
      )}
    </>
  );
};

export default Schedule;

export async function getServerSideProps() {
  // Fetch data from external API
  let res = await fetch(`https://pokeapi.co/api/v2/region/`);
  let dataRegions = await res.json();
  dataRegions = dataRegions.results.map(
    (region: { name: string; url: string }) => region.name
  );

  res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1154`);
  let dataPokemons = await res.json();
  dataPokemons = dataPokemons.results.map((pokemon: Pokemon) => pokemon.name);

  let dates = await fetch("http://localhost:3000/api/scheduling/date");
  dates = await dates.json();

  // Pass data to the page via props
  return {
    props: { regions: dataRegions, pokemons: dataPokemons, dates },
  };
}

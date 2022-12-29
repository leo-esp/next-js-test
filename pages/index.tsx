import Image from "next/image";
import backgroundImage from "public/images/pokemon-hero.jpg";
import styled from "styled-components";

const StyledCenterText = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Home: React.FC = () => {
  return (
    <div style={{ position: "relative" }}>
      <StyledCenterText>
        Cuidamos bem do seu pokémon, <br /> para ele cuidar bem de você
      </StyledCenterText>
      <Image
        src={backgroundImage}
        alt="Picture of the author"
        style={{
          overflow: "hidden",
          zIndex: 0,
        }}
      />
    </div>
  );
};
export default Home;

import { Inter } from "@next/font/google";
import styled from "styled-components";
import ContainerButtons from "./ContainerButtons";
import Footer from "./Footer";
import Logo from "./Logo";
import TopBar from "./TopBar";

const inter = Inter({ subsets: ["latin"] });
interface Props {
  children: JSX.Element | JSX.Element[];
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <StyledContainer>
      <style global jsx>{`
        html,
        body,
        button,
        body > div:first-child,
        div#__next,
        div#__next > div {
          font-family: ${inter.style.fontFamily};
          height: 100%;
          background-color: #fff;
        }
      `}</style>
      <TopBar>
        <Logo />
        <ContainerButtons />
      </TopBar>
      {children}
      <Footer />
    </StyledContainer>
  );
};

export default Layout;

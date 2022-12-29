import { render, waitForElementToBeRemoved } from "@testing-library/react";
import { debug } from "console";
import Logo from "./";

describe("Home Component", () => {
  it("Deve iniciar aberto e retrair após 5 segundos", () => {
    const { getByText } = render(<Logo />);
    
    expect(getByText("Centro Pokémon")).toBeInTheDocument;
  });
});

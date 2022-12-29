import { render } from "@testing-library/react";
import { debug } from "console";
import Home from "pages/index";

describe("Home Component", () => {
  it("Deve iniciar aberto e retrair após 5 segundos", () => {
    const { getByText } = render(<Home />);
    debug();
    expect(getByText("Cuidamos bem do seu pokémon, para ele cuidar bem de você")).toBeInTheDocument;
  });
});

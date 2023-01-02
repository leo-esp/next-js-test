import { act, render, fireEvent } from "@testing-library/react";
import Logo from "./";

describe("Logo Component", () => {
  it("O Logo deve iniciar aberto", () => {
    const { getByText } = render(<Logo />);

    expect(getByText("Centro Pokémon")).toBeInTheDocument;
    expect(getByText("Centro Pokémon")).toBeVisible;
  });

  it("O Logo NÃO deve retrair antes de 5 segundos", async () => {
    const { getByText } = render(<Logo />);
    act(() => jest.advanceTimersByTime(5000));
    expect(getByText("Centro Pokémon")).toBeInTheDocument;
    expect(getByText("Centro Pokémon")).toBeVisible;
  });

  it("O Logo deve retrair após 5 segundos", async () => {
    const { getByText } = render(<Logo />);
    act(() => jest.advanceTimersByTime(5000));
    expect(getByText("Centro Pokémon")).toBeInTheDocument;
    expect(getByText("Centro Pokémon")).not.toBeVisible;
  });
  it("Durante o hover o Logo deve expandir", async () => {
    const { getByText } = render(<Logo />);
    act(() => jest.advanceTimersByTime(5000));
    fireEvent.mouseOver(getByText("Centro Pokémon"));
    expect(getByText("Centro Pokémon")).toBeInTheDocument;
    expect(getByText("Centro Pokémon")).toBeVisible;
  });
  it("Após o hover o Logo deve retrair", async () => {
    const { getByText } = render(<Logo />);
    act(() => jest.advanceTimersByTime(5000));
    fireEvent.mouseOver(getByText("Centro Pokémon"));
    act(() => jest.advanceTimersByTime(2000));
    fireEvent.mouseOut(getByText("Centro Pokémon"));
    act(() => jest.advanceTimersByTime(1000));
    expect(getByText("Centro Pokémon")).toBeInTheDocument;
    expect(getByText("Centro Pokémon")).not.toBeVisible;
  });
});

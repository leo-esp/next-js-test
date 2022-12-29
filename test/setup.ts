import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

jest.mock("next/image", () => ({
  __esModule: true,
  default: () => {
    return "Next image stub"; // whatever
  },
}));

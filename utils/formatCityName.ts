import { toPascalCase } from "./pascalCase";

export const formatCityName = (cityNameRaw: string) => {
  const city = cityNameRaw.split("--")[0];
  return `${toPascalCase(city.split("-")[0])} ${toPascalCase(
    city.split("-")[1]
  )}`;
};

export const toPascalCase = (string: string) => {
  if (string) {
    return string.replace(
      /\w+/g,
      (w) => w[0].toUpperCase() + w.slice(1).toLowerCase()
    );
  } else {
    console.log("Tem algo errado com essa string: ", string);
  }
};

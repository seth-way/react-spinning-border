type HexColor = `#${string}`;

type ColorArray =
  | [HexColor]
  | [HexColor, HexColor]
  | [HexColor, HexColor, HexColor]
  | [HexColor, HexColor, HexColor, HexColor];

export const assignColors = (colors: ColorArray): ColorArray => {
  const { length } = colors;
  if (length === 4) return colors;
  if (length === 3) return [colors[0], colors[1], colors[2], colors[0]];
  if (length === 2) return [colors[0], colors[1], colors[0], colors[1]];
  return [colors[0], colors[0], colors[0], colors[0]];
};

//export default { assignColors };

const getArcPaths = (coordinates: string[], borderRadius: number): string[] => {
  const radii = `A${borderRadius},${borderRadius}`;
  const path1 = `M${coordinates[3]} ${radii} 0 0,0 ${coordinates[1]}`;
  const path2 = `M${coordinates[3]} ${radii} 0 0,1 ${coordinates[1]}`;
  const path3 = `M${coordinates[1]} ${radii} 0 0,1 ${coordinates[3]}`;
  const path4 = `M${coordinates[1]} ${radii} 0 0,1 ${coordinates[2]}`;

  return [path1, path2, path3, path4];
};

type Border = 'sm' | 'md' | 'lg' | 'xl';
type Padding = 'sm' | 'md' | 'lg' | 'none';

export interface Sizes {
  imgRadius: number;
  paths: string[];
  strokeWidth: number;
}

export const getBorderSizes = (border: Border, padding: Padding): Sizes => {
  const MAX_RADIUS = 150;
  const BORDER_SIZES = {
    sm: 10,
    md: 15,
    lg: 20,
    xl: 25,
  };

  const PADDING_SIZES = {
    sm: 5,
    md: 10,
    lg: 20,
    none: 0,
  };

  const strokeWidth = BORDER_SIZES[border];
  const imgRadius = 150 - 2 - strokeWidth - PADDING_SIZES[padding];
  const borderRadius = MAX_RADIUS - 2 - strokeWidth / 2;
  const coordinates = [
    `150,${150 - borderRadius}`,
    `${150 + borderRadius},150`,
    `150,${150 + borderRadius}`,
    `${150 - borderRadius},150`,
  ];

  const paths = getArcPaths(coordinates, borderRadius);

  return { imgRadius, paths, strokeWidth };
};

//export default { getBorderSizes };

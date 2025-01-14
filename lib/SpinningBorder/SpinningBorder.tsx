import React from 'react';
import { motion, useScroll } from 'motion/react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useRotations } from '../hooks/rotations';
import { assignColors } from '../utils/colors';
import { getBorderSizes } from '../utils/border';

type HexColor = `#${string}`;

type ColorArray =
  | [HexColor]
  | [HexColor, HexColor]
  | [HexColor, HexColor, HexColor]
  | [HexColor, HexColor, HexColor, HexColor];

const DEFAULT_COLORS = ['#f137a6', '#fbe932', '#5c9eff', '#7ed21e'] as ColorArray;

export interface SpinningBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The local or external image source.
   *
   * - Must be a valid image URL or path.
   * - Typically a profile or avatar image.
   */
  image: string;

  /**
   * An optional array of hex color strings to customize border gradients.
   *
   * - Must be valid hex color strings (e.g., `#ffffff`).
   * - Can contain 1 to 4 colors.
   *
   * @example
   * // Valid
   * colors: ['#ff0000', '#00ff00', '#0000ff']
   *
   * // Invalid
   * colors: ['#zzzzzz'] (not a valid hex color)
   * colors: [] (empty array not allowed)
   *
   * @default ['#f137a6', '#fbe932', '#5c9eff', '#7ed21e']
   */
  colors?: ColorArray;

  /**
   * The overall size of the component.
   *
   * Options:
   * - `'sm'`: 96 X 96px.
   * - `'md'`: 192 X 192px (default).
   * - `'lg'`: 320 X 320px.
   * - `'xl'`: 600 X 600px.
   * - `'full'`: Full width of parent container.
   *
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * The size of the border around the image.
   *
   * Options:
   * - `'sm'`: 3% width of parent container.
   * - `'md'`: 5% (default).
   * - `'lg'`: 7%.
   * - `'xl'`: 8%.
   *
   * @default 'md'
   */
  border?: 'sm' | 'md' | 'lg' | 'xl';

  /**
   * The size of the gap between the border and the image.
   *
   * Options:
   * - `'sm'`: 2% width of parent container.
   * - `'md'`: 3% (default).
   * - `'lg'`: 7%.
   * - `'none'`: No padding.
   *
   * @default 'md'
   */
  padding?: 'sm' | 'md' | 'lg' | 'none';

  /**
   * An optional number used to speed up or slow down the spin animation.
   *
   * - Recommended range: 0 to 10.
   * - Higher values increase animation speed (relative to scroll speed)
   * - Lower values slow it down.
   *
   * @default 1
   */
  speedFactor?: number;
}

const variants = {
  base: 'aspect-square relative min-w-10',
  sm: 'w-24',
  md: 'w-48',
  lg: 'w-80',
  xl: 'w-[600px]',
  full: 'w-full',
} as const;

export const SpinningBorder = React.forwardRef<HTMLDivElement, SpinningBorderProps>(
  (
    {
      image,
      colors = DEFAULT_COLORS,
      size = 'md',
      border = 'md',
      padding = 'md',
      speedFactor = 1,
      className,
      ...rest
    },
    ref,
  ) => {
    const { scrollY } = useScroll();
    const [rotation1, rotation2, rotation3, rotation4] = useRotations(scrollY, speedFactor);

    const [color1, color2, color3, color4] = assignColors(colors);
    const { imgRadius, paths, strokeWidth } = getBorderSizes(border, padding);

    const imgSize = `${Math.round((imgRadius * 2) / 3)}%`;
    const margin = (300 - imgRadius * 2) / 2 / 300;

    const borderStyle = { originX: 'center', originY: 'center' };

    const isValidImage = image && image.trim() !== '';
    const fallbackMessage = 'Please provide a valid image.';

    return (
      <div
        ref={ref}
        className={twMerge(clsx(variants.base, variants[size], className))}
        {...rest}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          className="absolute inset-0"
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          role="img"
        >
          <defs>
            <clipPath id="circleClip">
              <circle
                cx="150"
                cy="150"
                r={imgRadius}
              />
            </clipPath>
            <linearGradient
              id="border1"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                style={{ stopColor: color4, stopOpacity: 0 }}
              />
              <stop
                offset="45%"
                style={{ stopColor: color4, stopOpacity: 0.1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: color4, stopOpacity: 0.75 }}
              />
            </linearGradient>
            <linearGradient
              id="border2"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                style={{ stopColor: color3, stopOpacity: 0.75 }}
              />
              <stop
                offset="20%"
                style={{ stopColor: color3, stopOpacity: 0.35 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: color3, stopOpacity: 0 }}
              />
            </linearGradient>
            <linearGradient
              id="border3"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                style={{ stopColor: color2, stopOpacity: 0 }}
              />
              <stop
                offset="20%"
                style={{ stopColor: color2, stopOpacity: 0.1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: color2, stopOpacity: 0.75 }}
              />
            </linearGradient>
            <radialGradient
              id="border4"
              cx="0.9"
              cy="0.9"
              r="0.75"
            >
              <stop
                offset="0%"
                style={{ stopColor: color1, stopOpacity: 0.75 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: color1, stopOpacity: 0 }}
              />
            </radialGradient>
          </defs>
          {isValidImage ? (
            <image
              x={`${margin * 100}%`}
              y={`${margin * 100}%`}
              height={imgSize}
              width={imgSize}
              id="profile-pic"
              xlinkHref={image}
              clipPath="url(#circleClip)"
              preserveAspectRatio="xMidYMid slice"
            />
          ) : (
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="gray"
              fontSize="16"
            >
              {fallbackMessage}
            </text>
          )}
          <motion.g style={{ ...borderStyle, rotate: rotation1 }}>
            <motion.path
              d={paths[0]}
              stroke="url(#border1)"
            />
          </motion.g>
          <motion.g style={{ ...borderStyle, rotate: rotation2 }}>
            <path
              d={paths[1]}
              stroke="url(#border2)"
            />
          </motion.g>
          <motion.g style={{ ...borderStyle, rotate: rotation3 }}>
            <path
              d={paths[2]}
              stroke="url(#border3)"
            />
          </motion.g>
          <motion.g style={{ ...borderStyle, rotate: rotation4 }}>
            <path
              d={paths[3]}
              stroke="url(#border4)"
            />
          </motion.g>
        </svg>
      </div>
    );
  },
);

SpinningBorder.displayName = 'SpinningBorder';

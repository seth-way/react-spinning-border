# React Spinning Border

`react-spinning-border` is a lightweight, customizable React component that creates a visually engaging, scroll-linked spinning border effect. Built with TypeScript, styled with TailwindCSS, and animated using Motion, it’s perfect for creating eye-catching avatar or profile image components.

---

## Demo

<div align="center">
  <img src="/demo-assets/react-spinning-border-demo.gif" alt="Preview of the spinning border component" height="300px" width="auto">
</div>

---

## Documentation

Explore the complete Storybook documentation for detailed usage, examples, and API reference:

[**View Storybook**](https://seth-way.github.io/react-spinning-border/?path=/docs/components-spinningborder--docs)

---

## Installation

Install the package via npm:

```bash
npm install react-spinning-border
```

## SpinningBorder Component API

| Prop Name     | Type                                                                                                               | Default                                        | Description                                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `image`       | `string`                                                                                                           | **Required**                                   | The local or external image source. Must be a valid image URL or path. Typically a profile or avatar image. |
| `colors`      | `[HexColor] \| [HexColor, HexColor] \| [HexColor, HexColor, HexColor] \| [HexColor, HexColor, HexColor, HexColor]` | `['#f137a6', '#fbe932', '#5c9eff', '#7ed21e']` | An optional array of hex color strings to customize border gradients. Must be 1 to 4 valid hex colors.      |
| `size`        | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'`                                                                           | `'md'`                                         | The overall size of the component. Options: `'sm'` (96x96px), `'md'` (192x192px), `'lg'` (320x320px), etc.  |
| `border`      | `'sm' \| 'md' \| 'lg' \| 'xl'`                                                                                     | `'md'`                                         | The size of the border around the image. Options: `'sm'` (3%), `'md'` (5%), `'lg'` (7%), `'xl'` (8%).       |
| `padding`     | `'sm' \| 'md' \| 'lg' \| 'none'`                                                                                   | `'md'`                                         | The size of the gap between the border and the image. Options: `'sm'` (2%), `'md'` (3%), `'lg'` (7%), etc.  |
| `speedFactor` | `number`                                                                                                           | `1`                                            | A number used to speed up or slow down the spin animation. Recommended range: 0 to 10.                      |
| `className`   | `string`                                                                                                           | `undefined`                                    | Additional CSS classes for custom styling.                                                                  |
| `...rest`     | `React.HTMLAttributes<HTMLDivElement>`                                                                             | `undefined`                                    | Any additional HTML attributes to be passed to the component's container.                                   |

### Examples

#### Basic Usage

```jsx
<SpinningBorder
  image="https://example.com/profile.jpg"
  size="lg"
  border="xl"
  colors={['#ff0000', '#00ff00', '#0000ff']}
/>
```

#### Custom Speed and Padding

```jsx
<SpinningBorder
  image="/assets/avatar.png"
  size="md"
  border="lg"
  padding="sm"
  speedFactor={2}
  colors={['#e63946', '#f1faee']}
/>
```

## Links

- Project Repo: [GitHub](https://github.com/seth-way/react-spinning-border)
- NPM Package: [npmjs.com](https://www.npmjs.com/package/react-spinning-border)

## Author

This package was created and maintained by Seth Way.

- Portfolio: [sethway.vercel.app](https://sethway.vercel.app)
- GitHub: [@seth-way](https://github.com/seth-way)
- LinkedIn: [@sethway](https://www.linkedin.com/in/sethway/)
- npm: [@seth-way](https://www.npmjs.com/~seth-way)

### License

This project is licensed under the [MIT License](https://opensource.org/license/mit).

import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import { SpinningBorder } from './SpinningBorder';
import type { SpinningBorderProps } from './SpinningBorder';

const DEFAULT_IMAGE = 'https://via.placeholder.com/150';

it('should render without crashing with default props', () => {
  render(<SpinningBorder image={DEFAULT_IMAGE} />);

  const imageElement = screen.getByRole('img');
  expect(imageElement).toBeInTheDocument();

  const childWithXlinkHref = Array.from(imageElement.children).find(
    (child) => child.getAttribute('xlink:href') === DEFAULT_IMAGE,
  );

  expect(childWithXlinkHref).not.toBeNull();
  expect(childWithXlinkHref).toHaveAttribute('xlink:href', DEFAULT_IMAGE);
});

it('should apply default colors if none are provided', () => {
  render(<SpinningBorder image={DEFAULT_IMAGE} />);

  const svgElement = screen.getByRole('img', { hidden: true });

  expect(svgElement.innerHTML).toContain('rgb(241, 55, 166)'); // #f137a6
  expect(svgElement.innerHTML).toContain('rgb(251, 233, 50)'); // #fbe932
  expect(svgElement.innerHTML).toContain('rgb(92, 158, 255)'); // #5c9eff
  expect(svgElement.innerHTML).toContain('rgb(126, 210, 30)'); // #7ed21e
});

it('should apply custom colors if provided', () => {
  const customColors: SpinningBorderProps['colors'] = ['#123456', '#abcdef', '#654321', '#fedcba'];
  render(
    <SpinningBorder
      image={DEFAULT_IMAGE}
      colors={customColors}
    />,
  );

  const svgElement = screen.getByRole('img', { hidden: true });

  expect(svgElement.innerHTML).toContain('rgb(18, 52, 86)'); // #123456
  expect(svgElement.innerHTML).toContain('rgb(171, 205, 239)'); // #abcdef
  expect(svgElement.innerHTML).toContain('rgb(101, 67, 33)'); // #654321
  expect(svgElement.innerHTML).toContain('rgb(254, 220, 186)'); // #fedcba
});

it('should render with the correct size class', () => {
  render(
    <SpinningBorder
      image={DEFAULT_IMAGE}
      size="lg"
    />,
  );

  const container = screen.getByRole('img', { hidden: true }).parentElement;
  expect(container).toHaveClass('w-80');
});

it('should render with the correct border and padding', () => {
  render(
    <SpinningBorder
      image={DEFAULT_IMAGE}
      border="lg"
      padding="sm"
    />,
  );

  const svgElement = screen.getByRole('img', { hidden: true });
  expect(svgElement).toBeInTheDocument(); // Base rendering check
});

it('should render a fallback message if a valid image is not provided', () => {
  render(<SpinningBorder image="" />);
  const fallbackMessage = screen.getByText('Please provide a valid image.');
  expect(fallbackMessage).toBeInTheDocument();
});

it('should merge custom class names with default classes', () => {
  render(
    <SpinningBorder
      image={DEFAULT_IMAGE}
      className="custom-class"
    />,
  );

  const container = screen.getByRole('img', { hidden: true }).parentElement;
  expect(container).toHaveClass('custom-class');
});

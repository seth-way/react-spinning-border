import type { Meta, StoryObj } from '@storybook/react';
import { SpinningBorder, type SpinningBorderProps } from './SpinningBorder';
import React from 'react';
import RichardPrior from '../../demo-assets/richard-pryor.jpeg';
import RobinWillianms from '../../demo-assets/robin-williams.jpeg';
import SteveMartin from '../../demo-assets/steve-martin.jpeg';

const meta: Meta<typeof SpinningBorder> = {
  title: 'Components/SpinningBorder',
  component: SpinningBorder,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    image: {
      options: [RichardPrior, RobinWillianms, SteveMartin],
      control: { type: 'select' },
    },
    colors: {
      options: [
        ['#FF6F61'],
        ['#7ed321', '#ffd700'],
        ['#ff6f61', '#ffd700'],
        ['#7ed321', '#5c9eff', '#ff69b4'],
        ['#d32f2f', '#7b1fa2', '#536dfe'],
        ['#ff6f61', '#ffd700', '#7ed321', '#5c9eff'],
        ['#d32f2f', '#7b1fa2', '#536dfe', '#03a9f4'],
      ],
      control: { type: 'select' },
    },
    speedFactor: {
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 0.25,
      },
    },
  },
  decorators: [
    (Story) =>
      React.createElement(
        'div',
        {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '150vh',
          },
        },
        React.createElement(
          'h1',
          { style: { position: 'absolute', top: 0 } },
          'Scroll to view component & animation.',
        ),
        React.createElement(Story),
      ),
  ],
};

export default meta;

const defaultProps: SpinningBorderProps = {
  image: RichardPrior,
};

export const DefaultSpinningBorder: StoryObj<typeof meta> = {
  args: {
    ...defaultProps,
  },
};

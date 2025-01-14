import { useSpring, useTransform, MotionValue } from 'motion/react';

type RotationConfig = {
  stiffness: number;
  damping: number;
  mass: number;
};

const defaultConfigs: RotationConfig[] = [
  { stiffness: 100, damping: 20, mass: 0.5 },
  { stiffness: 140, damping: 180, mass: 0.6 },
  { stiffness: 500, damping: 200, mass: 0.9 },
  { stiffness: 600, damping: 150, mass: 0.3 },
];

export const useRotations = (scrollY: MotionValue<number>, speedFactor: number) => {
  const rotation1 = useSpring(scrollY, defaultConfigs[0]);
  const rotation1B = useTransform(rotation1, (value) => value * speedFactor);
  const rotation2 = useSpring(scrollY, defaultConfigs[1]);
  const rotation2B = useTransform(rotation2, (value) => -0.9 * value * speedFactor);
  const rotation3 = useSpring(scrollY, defaultConfigs[2]);
  const rotation3B = useTransform(rotation3, (value) => value * speedFactor);
  const rotation4 = useSpring(scrollY, defaultConfigs[3]);
  const rotation4B = useTransform(rotation4, (value) => -0.8 * value * speedFactor);

  return [rotation1B, rotation2B, rotation3B, rotation4B] as const;
};

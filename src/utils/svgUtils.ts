import type { Point } from '../types';

export const createSvgPath = (points: Point[]): string => {
  if (points.length < 3) return '';

  return points.reduce((path, point, index) => (
    path + (index === 0 ? `M ${point.x},${point.y}` : ` L ${point.x},${point.y}`)
  ), '') + ' Z';
};

export const calculateGridPoints = (
  levels: number,
  angleStep: number,
  getPoint: (angle: number, value: number) => Point,
  vertexCount: number
): Point[][] => {
  return Array.from({ length: levels }).map((_, i) => {
    const level = ((i + 1) * (100 / levels));
    return Array.from({ length: vertexCount }).map((_, j) => {
      const angle = j * angleStep;
      return getPoint(angle, level);
    });
  });
};

export const polarToCartesian = (
  centerX: number,
  centerY: number,
  radius: number,
  angleInRadians: number
): Point => {
  return {
    x: centerX + radius * Math.cos(angleInRadians - Math.PI / 2),
    y: centerY + radius * Math.sin(angleInRadians - Math.PI / 2),
  };
};
import React from 'react';
import { motion } from 'framer-motion';
import type { Point, Virtue } from '../../types';
import { createSvgPath, calculateGridPoints, polarToCartesian } from '../../utils/svgUtils';

interface RadarChartProps {
  virtues: Virtue[];
  size?: number;
  className?: string;
}

export const RadarChart: React.FC<RadarChartProps> = ({
  virtues,
  size = 300,
  className = '',
}) => {
  const center = size / 2;
  const radius = (size / 2) * 0.8;
  const angleStep = (2 * Math.PI) / virtues.length;

  const getPoint = React.useCallback(
    (angle: number, value: number): Point => {
      return polarToCartesian(
        center,
        center,
        (value / 100) * radius,
        angle
      );
    },
    [center, radius]
  );

  const points = virtues.map((virtue, i) => {
    const angle = i * angleStep;
    return getPoint(angle, virtue.progress);
  });

  const pathData = createSvgPath(points);
  const gridPoints = calculateGridPoints(5, angleStep, getPoint, virtues.length);

  return (
    <div className={`relative ${className}`}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background grid */}
        {gridPoints.map((points, i) => (
          <motion.path
            key={`grid-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: i * 0.1 }}
            d={createSvgPath(points)}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}

        {/* Axes */}
        {virtues.map((_, i) => {
          const angle = i * angleStep;
          const point = getPoint(angle, 100);
          return (
            <motion.line
              key={`axis-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: i * 0.1 }}
              x1={center}
              y1={center}
              x2={point.x}
              y2={point.y}
              stroke="currentColor"
              strokeWidth="1"
            />
          );
        })}

        {/* Progress area */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          d={pathData}
          fill="currentColor"
          fillOpacity="0.2"
          stroke="currentColor"
          strokeWidth="2"
          className="text-indigo-500"
        />

        {/* Progress points */}
        {points.map((point, i) => (
          <motion.circle
            key={`point-${i}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            cx={point.x}
            cy={point.y}
            r="4"
            className="fill-indigo-500"
          />
        ))}
      </svg>

      {/* Labels */}
      {virtues.map((virtue, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const point = getPoint(angle, 115);
        const textAnchor = 
          angle === -Math.PI / 2 ? 'middle' :
          angle > -Math.PI / 2 && angle < Math.PI / 2 ? 'start' : 'end';

        return (
          <motion.div
            key={`label-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 text-sm font-medium"
            style={{
              left: point.x,
              top: point.y,
              textAlign: textAnchor === 'middle' ? 'center' : textAnchor === 'start' ? 'left' : 'right',
            }}
          >
            <div className="flex items-center space-x-1">
              <virtue.icon className={`w-4 h-4 ${virtue.color}`} />
              <span>{virtue.name}</span>
            </div>
            <span className={`text-xs ${virtue.color}`}>{virtue.progress}%</span>
          </motion.div>
        );
      })}
    </div>
  );
};
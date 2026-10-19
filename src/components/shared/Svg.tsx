import type { CustomSvgProps } from '@/src/app/types/svg';

export default function Svg({
  paths = [],
  rect,
  width = 24,
  height = 24,
  viewBox = '0 0 24 24',
  stroke = 'currentColor',
  strokeWidth = 1.5,
  fill = 'none',
  className,
}: CustomSvgProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {rect && (
        <rect
          x={rect.x}
          y={rect.y}
          width={rect.width}
          height={rect.height}
          rx={rect.rx}
        />
      )}

      {paths.map((path, index) => (
        <path key={index} d={path} />
      ))}
    </svg>
  );
}

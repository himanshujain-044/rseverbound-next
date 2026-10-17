export interface SvgRect {
  x: number;
  y: number;
  width: number;
  height: number;
  rx?: number;
}

export interface CustomSvgProps {
  paths?: string[];
  rect?: SvgRect;
  width?: number;
  height?: number;
  viewBox?: string;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
  className?: string;
}

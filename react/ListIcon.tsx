import * as React from "react";
export type IconProps = React.SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number };
export default function ListIcon({ size = 24, strokeWidth = 2, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 6h11M9 12h11M9 18h11M4.5 6h.5M4.5 12h.5M4.5 18h.5"/>
    </svg>
  );
}

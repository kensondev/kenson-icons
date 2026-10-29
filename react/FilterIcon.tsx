import * as React from "react";
export type IconProps = React.SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number };
export default function FilterIcon({ size = 24, strokeWidth = 2, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 4h18l-7 8v7l-4 2v-9z"/>
    </svg>
  );
}

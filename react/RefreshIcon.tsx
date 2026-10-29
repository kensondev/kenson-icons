import * as React from "react";
export type IconProps = React.SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number };
export default function RefreshIcon({ size = 24, strokeWidth = 2, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 11a8 8 0 0 0-14.5-4.5L4 8"/>
      <path d="M4 3v5h5"/>
      <path d="M4 13a8 8 0 0 0 14.5 4.5L20 16"/>
      <path d="M20 21v-5h-5"/>
    </svg>
  );
}

import * as React from "react";
export type IconProps = React.SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number };
export default function UsersIcon({ size = 24, strokeWidth = 2, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="9" cy="8" r="3.5"/>
      <path d="M2 20c0-3.5 3-5.5 7-5.5s7 2 7 5.5"/>
      <path d="M16 4.5a3.5 3.5 0 0 1 0 7"/>
      <path d="M18 14.8c2.4.6 4 2.3 4 5.2"/>
    </svg>
  );
}

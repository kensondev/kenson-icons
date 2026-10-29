import * as React from "react";
export type IconProps = React.SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number };
export default function ShareIcon({ size = 24, strokeWidth = 2, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="6" cy="12" r="2.5"/>
      <circle cx="18" cy="6" r="2.5"/>
      <circle cx="18" cy="18" r="2.5"/>
      <path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6"/>
    </svg>
  );
}

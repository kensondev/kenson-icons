import * as React from "react";
export type IconProps = React.SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number };
export default function CartIcon({ size = 24, strokeWidth = 2, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="9" cy="20" r="1.5"/>
      <circle cx="18" cy="20" r="1.5"/>
      <path d="M2 3h3l2.5 12h12L22 7H6.2"/>
    </svg>
  );
}

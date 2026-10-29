import * as React from "react";
export type IconProps = React.SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number };
export default function InfoIcon({ size = 24, strokeWidth = 2, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9"/>
      <path d="M12 11v6M12 7.5v.5"/>
    </svg>
  );
}

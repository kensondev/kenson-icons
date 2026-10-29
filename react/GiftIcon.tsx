import * as React from "react";
export type IconProps = React.SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number };
export default function GiftIcon({ size = 24, strokeWidth = 2, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="8" width="18" height="4"/>
      <path d="M5 12v9h14v-9M12 8v13"/>
      <path d="M12 8c-2-4-6-4-6-1.5S10 8 12 8c2 0 6-.5 6-1.5S14 4 12 8z"/>
    </svg>
  );
}

import React from 'react';

export const IconDots = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_1812_589)">
        <circle cx="11.5" cy="4.5" r="1.5" fill="#0832DE" />
        <circle cx="11.5" cy="12.5" r="1.5" fill="#0832DE" />
        <circle cx="11.5" cy="20.5" r="1.5" fill="#0832DE" />
      </g>
      <defs>
        <clipPath id="clip0_1812_589">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

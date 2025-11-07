import React from 'react';

export const IconPlus = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg fill="none" {...props}>
      <g clipPath="url(#clip0_1801_7164)">
        <path
          d="M5 16H27"
          stroke="#0832DE"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 5V27"
          stroke="#0832DE"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1801_7164">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

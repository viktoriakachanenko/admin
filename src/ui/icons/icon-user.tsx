import React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconUser = ({ size = 16, color = "#F6F6F6", ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1937_255)">
        <path
          d="M11 3.5H14"
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 2V5"
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.93701 13.4994C2.55174 12.4354 3.43564 11.5519 4.49994 10.9376C5.56423 10.3234 6.77143 9.99999 8.00027 10C9.22911 10 10.4363 10.3234 11.5006 10.9377C12.5649 11.552 13.4488 12.4355 14.0635 13.4995"
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.7532 7.38642C11.4858 8.10835 11.0157 8.73772 10.3993 9.19893C9.78287 9.66014 9.04642 9.93358 8.27839 9.98639C7.51035 10.0392 6.74341 9.86914 6.06968 9.49664C5.39596 9.12414 4.84411 8.56504 4.48044 7.88651C4.11676 7.20798 3.95673 6.43888 4.01957 5.6716C4.0824 4.90432 4.36543 4.1715 4.83465 3.56118C5.30387 2.95086 5.93933 2.48899 6.66468 2.23106C7.39003 1.97313 8.17443 1.93012 8.92363 2.10718"
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1937_255">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

import { IconProps } from "./EducationIcon";
import React from "react";

const EmailIcon = ({ height, width, fill }: IconProps) => {
  return (
    <svg
      fill={"none"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <path
          d="M4 9.00005L10.2 13.65C11.2667 14.45 12.7333 14.45 13.8 13.65L20 9"
          stroke={fill ? fill : "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M3 9.17681C3 8.45047 3.39378 7.78123 4.02871 7.42849L11.0287 3.5396C11.6328 3.20402 12.3672 3.20402 12.9713 3.5396L19.9713 7.42849C20.6062 7.78123 21 8.45047 21 9.17681V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9.17681Z"
          stroke={fill ? fill : "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};

export default EmailIcon;

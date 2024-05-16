import React from "react";
import { IconProps } from "./EducationIcon";

const SunIcon = ({ width, height, fill }: IconProps) => {
  return (
    <svg
      fill={fill ? fill : "#000000"}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <circle cx="12" cy="12" r="5" stroke="#1C274C" strokeWidth="1.5" />
        <path
          d="M12 2V4"
          stroke={fill ? fill : "#000"}
          strokeLinecap="round"
          strokeWidth="1.5"
        />
        <path
          d="M12 20V22"
          stroke={fill ? fill : "#000"}
          strokeLinecap="round"
          strokeWidth="1.5"
        />
        <path
          d="M4 12L2 12"
          stroke={fill ? fill : "#000"}
          strokeLinecap="round"
          strokeWidth="1.5"
        />
        <path
          d="M22 12L20 12"
          stroke={fill ? fill : "#000"}
          strokeLinecap="round"
          strokeWidth="1.5"
        />
        <path
          d="M19.7778 4.22266L17.5558 6.25424"
          stroke={fill ? fill : "#000"}
          strokeLinecap="round"
          strokeWidth="1.5"
        />
        <path
          d="M4.22217 4.22266L6.44418 6.25424"
          stroke={fill ? fill : "#000"}
          strokeLinecap="round"
          strokeWidth="1.5"
        />
        <path
          d="M6.44434 17.5557L4.22211 19.7779"
          stroke={fill ? fill : "#000"}
          strokeLinecap="round"
          strokeWidth="1.5"
        />
        <path
          d="M19.7778 19.7773L17.5558 17.5551"
          stroke={fill ? fill : "#000"}
          strokeLinecap="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
};

export default SunIcon;

import React from "react";
import { IconProps } from "./EducationIcon";

type Props = {};

const ExternalLinkIcon = ({ height, width, fill }: IconProps) => {
  return (
    <svg
      fill={fill ? fill : "#000000"}
      viewBox="0 0 32 32"
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
        <path d="M23.5 23.5h-15v-15h4.791V6H6v20h20v-7.969h-2.5z" />
        <path d="M17.979 6l3.016 3.018-6.829 6.829 1.988 1.987 6.83-6.828L26 14.02V6z" />
      </g>
    </svg>
  );
};

export default ExternalLinkIcon;

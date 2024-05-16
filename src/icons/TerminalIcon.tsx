import React from "react";
import { IconProps } from "./EducationIcon";

type Props = {};

const TerminalIcon = ({ height, width, fill }: IconProps) => {
  return (
    <svg
      fill="none"
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
          d="M4.5 10.7C4.5 9.57989 4.5 9.01984 4.71799 8.59202C4.90973 8.21569 5.21569 7.90973 5.59202 7.71799C6.01984 7.5 6.5799 7.5 7.7 7.5H16.3C17.4201 7.5 17.9802 7.5 18.408 7.71799C18.7843 7.90973 19.0903 8.21569 19.282 8.59202C19.5 9.01984 19.5 9.57989 19.5 10.7V14.3C19.5 15.4201 19.5 15.9802 19.282 16.408C19.0903 16.7843 18.7843 17.0903 18.408 17.282C17.9802 17.5 17.4201 17.5 16.3 17.5H7.7C6.57989 17.5 6.01984 17.5 5.59202 17.282C5.21569 17.0903 4.90973 16.7843 4.71799 16.408C4.5 15.9802 4.5 15.4201 4.5 14.3V10.7Z"
          stroke={fill ? fill : "#000000"}
        />
        <path
          d="M7.5 10.5L9.5 12.5L7.5 14.5"
          stroke={fill ? fill : "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.5 14.5H16.5"
          stroke={fill ? fill : "#000000"}
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default TerminalIcon;

"use client";

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";

type Props = {
  children: React.ReactNode;
};

export const ChakraUiProvider: React.FC<Props> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  semanticTokens: {
    colors: {
      primaryBgColor: {
        default: "#ffffff",
        _dark: "#0a192f",
      },
      primaryHeading: {
        default: "#09090b",
        _dark: "#ccd6f6",
      },
      subText: {
        default: "#71717a",
        _dark: "#8892b0",
      },
      highlightColor: {
        default: "#5D13E7",
        _dark: "#64ffda",
      },
      borderColor: {
        default: "#9c9c9c",
        _dark: "#a8b2d1",
      },
    },
  },
  styles: {
    global: {
      "html,body": {
        background: "primaryBgColor",
      },
    },
  },
  config: config,
});

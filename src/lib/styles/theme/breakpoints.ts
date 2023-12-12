import { DeepPartial, Theme } from "@chakra-ui/react";

const extendedBreakpoints: DeepPartial<Theme["breakpoints"]> = {
  base: "0px",
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "2160px",
};

const overridenChakraBreakpoints: DeepPartial<Theme["breakpoints"]> = {};

export const breakpoints = {
  ...overridenChakraBreakpoints,
  ...extendedBreakpoints,
};

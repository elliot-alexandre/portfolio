import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";

import HomeButton from "./Home";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const maxHeader = useBreakpointValue({ base: "100%", "2xl": "7xl" });

  return (
    <Flex
      as="header"
      width="full"
      align="center"
      justifyContent={"space-between"}
      maxW={maxHeader}
      margin={"0 auto"}
    >
      <Box marginRight="auto">
        <HomeButton />
      </Box>
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;

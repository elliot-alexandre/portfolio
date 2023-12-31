"use client";

import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      margin="0 auto"
      maxWidth={"100%"}
      minHeight={"100vh"}
      transition="0.5s ease-out"
      style={{ overflowX: "hidden" }}
    >
      <Box margin="8" height={"100%"}>
        <Header />
        <Box as="main" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;

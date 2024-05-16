import Introduction from "@/components/portfolio/Introduction";
import Projects from "@/components/portfolio/Projects";
import TechStack from "@/components/portfolio/TechStack";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      as="main"
      width={"100%"}
      padding={"20px"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Box
        width={{ base: "100%", sm: "100%", md: "70%", lg: "40%" }}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        gap={"25px"}
      >
        <Introduction />
        <TechStack />
        <Projects />
      </Box>
    </Box>
  );
}

"use client";
import React from "react";
import {
  Box,
  Text,
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import EmailIcon from "@/icons/EmailIcon";
import { LocationIcon } from "@/icons/LocationIcon";
import GithubIcon from "@/icons/GithubIcon";
import { Link } from "@chakra-ui/react";
import EducationIcon from "@/icons/EducationIcon";
import MoonIcon from "@/icons/MoonIcon";
import SunIcon from "@/icons/SunIcon";
import TerminalIcon from "@/icons/TerminalIcon";
import { ModalComponent } from "../utlis/ModalComponent";
import { Terminal } from "../utlis/Terminal";

type Props = {};

const Introduction = (props: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  let menuIconColor = useColorModeValue("#000000", "#ffffff");
  let introIconColor = useColorModeValue("#71717a", "#ccd6f6");
  const {
    isOpen: isTerminalOpen,
    onOpen: openTerminal,
    onClose: closeTerminal,
  } = useDisclosure();

  return (
    <Box
      display={"flex"}
      width={"100%"}
      justifyContent={"center"}
      flexDirection={{
        base: "column-reverse",
        sm: "column-reverse",
        md: "row",
        lg: "row",
      }}
      gap={{ base: "13px", sm: "13px" }}
    >
      <Box
        width={{ base: "95%", sm: "95%", md: "50%", lg: "60%" }}
        display={"flex"}
        flexDir={"column"}
        gap={"8px"}
      >
        <Text fontSize={"27px"} color={"primaryHeading"}>
          Luck Sharma
        </Text>

        <Box display={"flex"} gap={"5px"} color={"subText"}>
          <LocationIcon width="18px" height="18px" fill={introIconColor} />
          <Text fontSize={"14px"}>Haryana , India</Text>
        </Box>

        <Box display={"flex"} gap={"5px"} color={"subText"}>
          <EducationIcon width="20px" height="20px" fill={introIconColor} />
          <Text fontSize={"14px"}>
            Bachelor&apos;s of Computer Applications( 2021 - 24 )
          </Text>
        </Box>
      </Box>

      <Box
        width={{ base: "100%", sm: "100%", md: "50%", lg: "40%" }}
        display={"flex"}
        justifyContent={{
          base: "normal",
          sm: "normal",
          md: "center",
          lg: "center",
        }}
        alignItems={"center"}
        gap={"15px"}
        alignSelf={"flex-start"}
      >
        <Link href={"https://github.com/mayank0274"} isExternal>
          <IconButton
            aria-label="mayank's github"
            icon={
              <GithubIcon width="20px" height="20px" fill={menuIconColor} />
            }
          />
        </Link>

        <Link href="mailto:sharma.mayank0274@gmail.com" isExternal>
          <IconButton
            aria-label="mayank's email"
            icon={<EmailIcon width="22px" height="22px" fill={menuIconColor} />}
          />
        </Link>

        <IconButton
          aria-label="mayank's email"
          icon={
            colorMode == "dark" ? (
              <SunIcon width="20px" height="20px" fill={menuIconColor} />
            ) : (
              <MoonIcon width="18px" height="18px" fill={menuIconColor} />
            )
          }
          onClick={toggleColorMode}
        />

        <IconButton
          aria-label="mayank's email"
          icon={
            <TerminalIcon width="35px" height="35px" fill={menuIconColor} />
          }
          onClick={openTerminal}
        />
      </Box>

      <ModalComponent onClose={closeTerminal} isOpen={isTerminalOpen}>
        <Terminal closeTerminal={closeTerminal} />
      </ModalComponent>
    </Box>
  );
};

export default Introduction;

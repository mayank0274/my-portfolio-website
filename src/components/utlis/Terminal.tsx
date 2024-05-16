"use client";
import { PROJECTS_LIST, TECH_STACK } from "@/constants/constants";
import { Box, Text, Input, Code } from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";

type Props = {
  closeTerminal: () => void;
};

interface ITerminalElements {
  command: string;
  output: string;
  timeStamp: number | string;
}

export const Terminal = ({ closeTerminal }: Props) => {
  const [prevCommands, setPrevCommands] = useState<ITerminalElements[]>([]);
  const [currentCmd, setCurrentCmd] = useState<string>("");
  const commandInputRef = useRef<HTMLInputElement>(null);
  const commandsList = ` 
  List of available commands
  ----------------------------------
  help - show available commands
  skills - show skills
  projects - show projects list 
  whoami - show some of my details
  exit - close terminal view
  `;

  const whoami = `
  I am Luck Sharma , a final year student of BCA . I am currently learning and exploring web dev , checkout my work at https://github.com/mayank0274
  `;

  // set focus to input elem
  useEffect(() => {
    commandInputRef.current?.focus();
  }, []);

  // set command
  const setCommand = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentCmd(e.target.value);
  };

  // excecute cmd
  const executeCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      let finalOp = "";

      switch (currentCmd) {
        case "skills":
          finalOp = JSON.stringify(TECH_STACK, null, 4);
          break;

        case "projects":
          finalOp = JSON.stringify(PROJECTS_LIST, null, 4);
          break;

        case "help":
          finalOp = commandsList;
          break;

        case "whoami":
          finalOp = whoami;
          break;

        case "exit":
          closeTerminal();
          break;

        case "clear":
          setPrevCommands([]);
          setCurrentCmd("");
          return;

        default:
          finalOp = "invalid command";
          break;
      }

      setPrevCommands((prev) => {
        return [
          ...prev,
          { command: currentCmd, output: finalOp, timeStamp: Date.now() },
        ];
      });
      setCurrentCmd("");
    }
  };

  useEffect(() => {
    commandInputRef.current?.scrollIntoView();
    commandInputRef.current?.focus();
  }, [prevCommands]);

  return (
    <Box
      height={"100%"}
      width={"100%"}
      padding={"10px"}
      color={"#fff"}
      display={"flex"}
      flexDir={"column"}
      gap={"7px"}
      overflow={"auto"}
    >
      <Box fontSize="17px">
        Welcome to my portfolio website , type ` help` to see available commands
      </Box>

      <Box display={"flex"} flexDir={"column"} gap={"8px"} overflow={"auto"}>
        {prevCommands.length > 0 &&
          prevCommands.map((termElement: ITerminalElements) => {
            return (
              <Box
                key={termElement.timeStamp}
                display={"flex"}
                flexDir={"column"}
                gap={"3px"}
              >
                <Box display={"flex"} gap={"4px"} alignItems={"center"}>
                  <Text as={"pre"}>$ luck&apos;s-portfolio &gt;&gt;</Text>
                  <input
                    readOnly
                    className="term_ip"
                    type="text"
                    value={termElement.command}
                  />
                </Box>
                <Code
                  whiteSpace={"pre-wrap"}
                  bg={"transparent"}
                  color={"ghostwhite"}
                >
                  {termElement.output}
                </Code>
              </Box>
            );
          })}

        <Box>
          <Box display={"flex"} gap={"4px"} width={"100%"}>
            <Text as={"pre"}>$ luck&apos;s-portfolio &gt;&gt;</Text>
            <input
              className="term_ip"
              ref={commandInputRef}
              type="text"
              value={currentCmd}
              onChange={(e) => {
                setCommand(e);
              }}
              onKeyDown={(e) => {
                executeCommand(e);
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

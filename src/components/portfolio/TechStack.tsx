import React from "react";
import { Box, Tag, Text } from "@chakra-ui/react";
import { TECH_STACK } from "@/constants/constants";

interface ITag {
  value: string;
  size?: string;
  hoverStyle?: any;
}

export const CustomizedTag: React.FC<ITag> = ({ value, size, hoverStyle }) => {
  return (
    <Tag
      size={size && size}
      bg={"transparent"}
      border={"1.5px solid"}
      borderColor={"borderColor"}
      borderRadius={"3px"}
      color={"subText"}
      cursor={"pointer"}
      _hover={{ borderColor: "highlightColor" }}
      _groupHover={{ ...hoverStyle }}
    >
      {value}
    </Tag>
  );
};

const TechStack = () => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDir={"column"}
      gap={"10px"}
      justifyContent={"center"}
    >
      <Text color={"primaryHeading"} fontSize={"21px"}>
        tech_stack
      </Text>
      <Box display={"flex"} gap={"7px"} flexWrap={"wrap"}>
        {TECH_STACK.map((tech: string) => {
          return <CustomizedTag value={tech} key={tech} />;
        })}
      </Box>
    </Box>
  );
};

export default TechStack;

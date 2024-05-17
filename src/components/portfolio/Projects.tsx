"use client";
import React from "react";
import { Box, Link, Tag, Text, useColorModeValue } from "@chakra-ui/react";
import { IProject, PROJECTS_LIST } from "@/constants/constants";
import { CustomizedTag } from "./TechStack";
import GithubIcon from "@/icons/GithubIcon";
import ExternalLinkIcon from "@/icons/ExternalLinkIcon";

interface IProjectCardProps {
  project: IProject;
}

const ProjectCard: React.FC<IProjectCardProps> = ({ project }) => {
  const { title, githubUrl, liveUrl, tags, description, highlightInfo } =
    project;
  const highlightInfoTagBg = useColorModeValue("#000", "#ccd6f6");
  const highlightInfoTagColor = useColorModeValue("#fff", "#000");
  let menuIconColor = useColorModeValue("#71717a", "#ffffff");
  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      gap={"7px"}
      cursor={"pointer"}
      data-group
    >
      <Box display={"flex"} gap={"15px"} flexWrap={"wrap"}>
        <Text
          fontSize={"18px"}
          color={"primaryHeading"}
          textDecoration={"underline"}
          textUnderlineOffset={"5px"}
          fontWeight={"bold"}
          _groupHover={{ color: "highlightColor" }}
        >
          {title}
        </Text>

        {highlightInfo && (
          <Tag
            size={"md"}
            key={highlightInfo}
            borderRadius="full"
            variant="solid"
            bg={highlightInfoTagBg}
            color={highlightInfoTagColor}
            fontSize={"11px"}
          >
            {highlightInfo}
          </Tag>
        )}
      </Box>

      {githubUrl && (
        <Box
          display={"flex"}
          gap={"15px"}
          color={"subText"}
          _groupHover={{
            color: "highlightColor",
            svg: {
              fill: "highlightColor",
              stroke: "highlightColor",
            },
          }}
        >
          <Link
            href={githubUrl}
            isExternal
            display={"flex"}
            gap={"5px"}
            alignItems={"center"}
          >
            Github{" "}
            <GithubIcon width="15px" height="15px" fill={menuIconColor} />
          </Link>

          <Link
            href={liveUrl}
            isExternal
            display={"flex"}
            gap={"5px"}
            alignItems={"center"}
          >
            Live Preview
            <ExternalLinkIcon width="17px" height="17px" fill={menuIconColor} />
          </Link>
        </Box>
      )}

      <Text
        color={"subText"}
        fontSize={"13.5px"}
        _groupHover={{ color: "highlightColor" }}
      >
        {description}
      </Text>

      <Box display={"flex"} gap={"7px"} flexWrap={"wrap"}>
        {tags.map((tech: string) => {
          return (
            <CustomizedTag
              value={tech}
              key={tech}
              size="sm"
              hoverStyle={{
                borderColor: "highlightColor",
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};

const Projects = () => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDir={"column"}
      gap={"10px"}
      justifyContent={"center"}
    >
      <Text color={"primaryHeading"} fontSize={"21px"}>
        projects
      </Text>

      <Box display={"flex"} flexDir={"column"} gap={"15px"}>
        {PROJECTS_LIST.map((project: IProject) => {
          return <ProjectCard key={project.title} project={project} />;
        })}
      </Box>
    </Box>
  );
};

export default Projects;

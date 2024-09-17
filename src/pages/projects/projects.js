import React from "react";
import BannerImage from "./projects.png";
import BannerWithText from "../../common/bannerwithtext/bannerwithtext";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import ProjectList from "../../common/projectList/projectList";

function Projects() {
  const { t } = useTranslation();

  const directory = require.context("./imgs/", true, /\.(png|jpe?g|svg)$/);
  var imagePaths = [];
  directory.keys().map((item) => imagePaths.push(item.replace("./", "")));

  var projects = [];
  imagePaths.map((path) => projects.push(path.split("/")[0]));
  projects = projects.filter(
    (value, index, array) => array.indexOf(value) === index
  );

  return (
    <>
      <Box>
        <BannerWithText
          imgSrc={BannerImage}
          title={t("projects.bannerWithText.title")}
          subtitle={t("projects.bannerWithText.subtitle")}
        />
      </Box>
      {projects.map((project) => {
        var projectImagePath = imagePaths.filter((value) => {
          return value.includes(project + "/");
        });
        var images = [];
        projectImagePath.map((path) => images.push(require("./imgs/" + path)));
        return <ProjectList key={project} images={images} title={project} />;
      })}
    </>
  );
}

export default Projects;

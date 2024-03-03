import BannerImage from "./projects.png";
import BannerWithText from "../../common/bannerwithtext/bannerwithtext";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <Box>
        <BannerWithText
          imgSrc={BannerImage}
          title={t("projects.bannerWithText.title")}
          subtitle={t("projects.bannerWithText.subtitle")}
        />
      </Box>
    </>
  );
}

export default Projects;

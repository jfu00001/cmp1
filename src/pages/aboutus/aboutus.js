import BannerImage from "./aboutus.png";
import BannerWithText from "../../common/bannerwithtext/bannerwithtext";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t } = useTranslation();

  return (
    <>
      <Box>
        <BannerWithText
          imgSrc={BannerImage}
          title={t("about-us.bannerWithText.title")}
          subtitle={t("about-us.bannerWithText.subtitle")}
        />
      </Box>
    </>
  );
}

export default AboutUs;

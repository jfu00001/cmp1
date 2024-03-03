import BannerImage from "./services.png";
import BannerWithText from "../../common/bannerwithtext/bannerwithtext";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();

  return (
    <>
      <Box>
        <BannerWithText
          imgSrc={BannerImage}
          title={t("services.bannerWithText.title")}
          subtitle={t("services.bannerWithText.subtitle")}
        />
      </Box>
    </>
  );}

export default Services;

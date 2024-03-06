import BannerImage from "./services.png";
import BannerWithText from "../../common/bannerwithtext/bannerwithtext";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import ServiceSection from "../../common/servicesection/servicesection";
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
      <ServiceSection
        serviceItemsDisplay="flex"
        serviceItems={[]}
        title={t("home.poolService.title")}
        p1={t("home.poolService.p1")}
        p2={t("home.poolService.p2")}
      />
    </>
  );
}

export default Services;

import BannerImage from "./services.png";
import BannerWithText from "../../common/bannerwithtext/bannerwithtext";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import ServiceSection from "../../common/servicesection/servicesection";
import ServiceList from "../../common/servicelist/servicelist";
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
        title={t("services.poolService.title")}
        p1={t("services.poolService.p1")}
        p2={t("services.poolService.p2")}
      />
      <ServiceList />
    </>
  );
}

export default Services;

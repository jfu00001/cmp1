/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CarouselWithText from "../../common/carouselwithtext/carouselwithtext";
import { useTranslation } from "react-i18next";
import PoolDesignInfo from "../../common/pooldesigninfo/pooldesigninfo";
import ServiceSection from "../../common/servicesection/servicesection";

function Home() {
  const carouselImages = require.context("./carouselimages", true);
  const carouselImageList = carouselImages
    .keys()
    .map((image) => carouselImages(image));
  const { t } = useTranslation();

  var jsonData = require("../../i18n/en.json");
  const serviceItems = jsonData.translation.list_of_services.map((service) => {
    return service.title;
  });

  return (
    <>
      <CarouselWithText
        imageList={carouselImageList}
        title={t("home.carousel-title")}
      />

      <div
        css={css`
          margin: 5vh 12vw 5vh 12vw;
          @media (max-width: 991px) {
            margin: 5vh 0 5vh 0;
          }
        `}
      >
        <PoolDesignInfo
          title={t("about-us.poolDesignInfo.title")}
          p1={t("about-us.poolDesignInfo.p1")}
          p2={t("about-us.poolDesignInfo.p2")}
          buttonText={t("about-us.poolDesignInfo.buttonText")}
        />
      </div>

      <ServiceSection
        serviceItemsDisplay="flex"
        serviceItems={serviceItems}
        title={t("services.poolService.title")}
        ourService={t("services.poolService.ourService")}
      />
    </>
  );
}

export default Home;

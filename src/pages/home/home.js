/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CarouselWithText from "../../common/carouselwithtext/carouselwithtext";
import { useTranslation } from "react-i18next";
import PoolDesignInfo from "../../common/pooldesigninfo/pooldesigninfo";
import ServiceSection from "../../common/servicesection/servicesection";
import LatestProjects from "../../common/latestProjects/latestProjects";
import GetInTouch from "../../common/getInTouch/getInTouch";

import LP1 from "../projects/imgs/pools/IMG_1634.jpg";
import LP2 from "../projects/imgs/pools/PHOTO-2024-02-22-16-57-54.jpg";
import LP3 from "../projects/imgs/pools/PHOTO-2024-02-22-16-56-33.jpg";
import LP4 from "../projects/imgs/eveything around the pool/SAVVAS-08 053.jpg";

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

  const latestProjects = [
    {
      imageSrc: LP1,
    },
    {
      imageSrc: LP2,
    },
    {
      imageSrc: LP3,
    },
    {
      imageSrc: LP4,
    },
  ];

  return (
    <>
      <CarouselWithText
        imageList={carouselImageList}
        title={t("home.carousel-title")}
      />

      <div
        css={css`
          margin: 5vh 10vw;
          @media (max-width: 991px) {
            margin: 5vh 0;
          }
        `}
      >
        <PoolDesignInfo
          title={t("about-us.poolDesignInfo.title")}
          p1={t("about-us.poolDesignInfo.p1")}
          p2={t("about-us.poolDesignInfo.p2")}
          p3={t("about-us.poolDesignInfo.p3")}
          buttonText={t("about-us.poolDesignInfo.buttonText")}
        />
      </div>

      <ServiceSection
        serviceItemsDisplay="flex"
        serviceItems={serviceItems}
        title={t("services.poolService.title")}
        ourService={t("services.poolService.ourService")}
      />
      <div
        css={css`
          margin: 5vh 10vw;
          @media (max-width: 991px) {
            margin: 5vh 0;
          }
        `}
      >
        <LatestProjects
          title={t("home.latest-project.title")}
          seeMoreHere={t("home.latest-project.see-more-here")}
          latestProjects={latestProjects}
        />
      </div>
      <GetInTouch
        contactUs={t("contact-us.contact-us")}
      />
    </>
  );
}

export default Home;

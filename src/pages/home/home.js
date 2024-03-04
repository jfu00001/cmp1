import CarouselWithText from "../../common/carouselwithtext/carouselwithtext";
import { useTranslation } from "react-i18next";
import PoolDesignInfo from "../../common/pooldesigninfo/pooldesigninfo";
import PoolDesignInfoImage from "./pooldesigninfo/PoolDesignInfo.png";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Home() {
  const carouselImages = require.context("./carouselimages", true);
  const carouselImageList = carouselImages
    .keys()
    .map((image) => carouselImages(image));
  const { t } = useTranslation();

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
          imageSrc={PoolDesignInfoImage}
          blueTitle={t("home.poolDesignInfo.blueTitle")}
          title={t("home.poolDesignInfo.title")}
          p1={t("home.poolDesignInfo.p1")}
          p2={t("home.poolDesignInfo.p2")}
          buttonText={t("home.poolDesignInfo.buttonText")}
        />
      </div>
    </>
  );
}

export default Home;

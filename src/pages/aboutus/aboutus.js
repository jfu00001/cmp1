/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import BannerImage from "./aboutus.png";
import BannerWithText from "../../common/bannerwithtext/bannerwithtext";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import AboutPageInfo from "../../common/aboutPageInfo/aboutPageInfo";
import AboutPageInfoImage from "./aboutInfo.png";

function AboutUs() {
  const { t } = useTranslation();

  const textBlocks = [t("services.p3"), t("services.p4"), t("services.p5")];

  return (
    <>
      <Box>
        <BannerWithText
          imgSrc={BannerImage}
          title={t("about-us.bannerWithText.title")}
          subtitle={t("about-us.bannerWithText.subtitle")}
        />
      </Box>
      <div
        css={css`
          margin: 5vh 10vw;
          @media (max-width: 991px) {
            margin: 5vh 0 5vh 0;
          }
        `}
      >
        <AboutPageInfo
          textBlocks={textBlocks}
          imageSrc={AboutPageInfoImage}
          blueTitle={t("home.poolDesignInfo.blueTitle")}
          title={t("home.poolDesignInfo.title")}
          p1={t("home.poolDesignInfo.p1")}
          p2={t("home.poolDesignInfo.p2")}
        />
      </div>
    </>
  );
}

export default AboutUs;

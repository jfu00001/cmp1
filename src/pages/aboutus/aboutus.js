/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import BannerImage from "./aboutus.png";
import BannerWithText from "../../common/bannerwithtext/bannerwithtext";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import AboutPageInfo from "../../common/aboutPageInfo/aboutPageInfo";

function AboutUs() {
  const { t } = useTranslation();

  const textBlocks = [t("about-us.p3"), t("about-us.p4"), t("about-us.p5")];

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
          blueTitle={t("about-us.poolDesignInfo.blueTitle")}
          title={t("about-us.poolDesignInfo.title")}
          p1={t("about-us.poolDesignInfo.p1")}
          p2={t("about-us.poolDesignInfo.p2")}
          p3={t("about-us.poolDesignInfo.p3")}
          rest={t("about-us.poolDesignInfo.rest")}
        />
      </div>
    </>
  );
}

export default AboutUs;

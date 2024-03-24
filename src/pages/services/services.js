/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import BannerImage from "./services.png";
import BannerWithText from "../../common/bannerwithtext/bannerwithtext";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import ServiceList from "../../common/servicelist/servicelist";
function Services() {
  const { t } = useTranslation();
  const headerStyles = css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0c85a7;
    color: #fff;
    padding: 54px 32px;
    font: 400 34px/129% "CeraPro-Regular";
    margin-top: 30px;
    text-align: center;
    @media (max-width: 991px) {
      max-width: 100%;
      padding: 15px 50px;
    }
  `;
  return (
    <>
      <Box>
        <BannerWithText
          imgSrc={BannerImage}
          title={t("services.bannerWithText.title")}
          subtitle={t("services.bannerWithText.subtitle")}
        />
      </Box>

      <header css={headerStyles}>
        {t("services.servicesWithDesc.title")}{" "}
      </header>

      <ServiceList />
    </>
  );
}

export default Services;

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import FooterLogo from "./footer-logo.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Button from "@mui/material-next/Button";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

// Define general reusable styles
const boxShadowStyle = css`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const textStyle = css`
  font-family: "CeraPro-Regular";
  color: var(--Shades-whites-white2, #f7f8f9);
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const contactTextStyle = css`
  font-family: "CeraPro-Regular";
  color: var(--Shades-whites-white2, #f7f8f9);
  @media (max-width: 991px) {
    margin-top: 0;
  }
`;

// Reusable components
const SectionTitle = ({ children }) => (
  <div
    css={[
      textStyle,
      css`
        font-size: 24px;
      `,
    ]}
  >
    {children}
  </div>
);

const SectionItem = ({ children }) => (
  <div
    css={[
      textStyle,
      css`
        margin-top: 29px;
      `,
    ]}
  >
    {children}
  </div>
);

const Container = ({ children }) => (
  <section
    css={[
      boxShadowStyle,
      css`
        background-color: var(--Shades-blacks-darker, #1a2426);
        padding: 50px 60px;
      `,
    ]}
  >
    {children}
  </section>
);

const PoolDesignerInfo = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <img
        loading="lazy"
        src={FooterLogo}
        alt="Premier pool design by Washington's trusted builder"
        css={css`
          aspect-ratio: 1.64;
          object-fit: auto;
          object-position: center;
          width: 244px;
          align-self: center;
          max-width: 100%;
        `}
      />
      <div
        css={[
          textStyle,
          css`
            margin-top: 12px;
            font-size: 20px;
            line-height: 30px;
            white-space: pre-line;
          `,
        ]}
      >
        {t("footer.paragraph")}
      </div>
    </React.Fragment>
  );
};

const ContactUsButton = () => {
  const { t } = useTranslation();

  return (
    <Link
      to="/contactus"
      sx={{ display: "inherit" }}
      css={css`
        margin-top: 30px;
        margin-bottom: 50px;
      `}
    >
      <Button
        sx={{
          color: "white",
          backgroundColor: "#0c85a7",
        }}
        variant="contained"
      >
        {t("contact-us.contact-us")}
      </Button>
    </Link>
  );
};

const Services = () => {
  const { t } = useTranslation();
  var jsonData = require("../../i18n/en.json");

  return (
    <>
      <SectionTitle>{t("services.bannerWithText.title")}</SectionTitle>
      {jsonData.translation.list_of_services.map((service) => {
        if (service.showInFooter) {
          return <SectionItem>{service.title}</SectionItem>;
        }
        return null;
      })}
    </>
  );
};

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle>{t("contact-us.contact-us")}</SectionTitle>
      <div
        css={css`
          display: flex;
          gap: 20px;
          padding: 2px 4px;
          margin-top: 15px;
          @media (max-width: 991px) {
            white-space: normal;
            margin-top: 30px;
            margin-left: 30px;
            margin-right: auto;
          }
        `}
      >
        <CallIcon style={{ color: "white" }} />
        <div css={contactTextStyle}>{t("contact-us.phone")}</div>
      </div>
      <div
        css={css`
          display: flex;
          gap: 20px;
          padding: 2px 4px;
          margin-top: 15px;
          @media (max-width: 991px) {
            white-space: normal;
            margin-top: 30px;
            margin-left: 30px;
            margin-right: auto;
          }
        `}
      >
        <EmailIcon style={{ color: "white" }} />
        <div css={contactTextStyle}>{t("contact-us.mail")}</div>
      </div>
      <div
        css={css`
          display: flex;
          gap: 20px;
          padding: 2px 4px;
          margin-top: 15px;
          @media (max-width: 991px) {
            white-space: normal;
            margin-top: 30px;
            margin-left: 30px;
            margin-right: auto;
            text-align: left;
          }
        `}
      >
        <HomeIcon style={{ color: "white" }} />
        <div css={contactTextStyle}>{t("contact-us.address")}</div>
      </div>
      <div
        css={css`
          display: flex;
          gap: 20px;
          padding: 2px 4px;
          margin-top: 15px;
          white-space: pre-line;
          @media (max-width: 991px) {
            white-space: normal;
            margin-top: 30px;
            margin-left: 30px;
            margin-right: auto;
            text-align: left;
          }
        `}
      >
        <AccessTimeFilledIcon style={{ color: "white" }} />
        <div css={contactTextStyle}>{t("contact-us.work-time")}</div>
      </div>
      <ContactUsButton />
    </>
  );
};

const Footer = () => {
  return (
    <Container>
      <div
        css={css`
          display: flex;
          justify-content: center;
          @media (max-width: 991px) {
            max-width: 100%;
          }
        `}
      >
        <div
          css={css`
            flex-grow: 1;
            display: flex;
            gap: 3%;
            @media (max-width: 991px) {
              flex-direction: column;
              align-items: stretch;
              gap: 0px;
            }
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              line-height: normal;
              width: 44%;
              padding: 0 10% 0 10%;
              @media (max-width: 991px) {
                width: 100%;
                padding: 0;
                text-align: center;
                margin-top: 50px;
              }
            `}
          >
            <PoolDesignerInfo />
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              line-height: normal;
              width: 20%;
              margin-left: 20px;
              @media (max-width: 991px) {
                text-align: center;
                width: 100%;
                margin-left: 0;
                margin-top: 50px;
              }
            `}
          >
            <Services />
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              line-height: normal;
              width: 30%;
              margin-left: 20px;
              @media (max-width: 991px) {
                width: 100%;
                margin-left: 0;
                margin-top: 50px;
                text-align: center;
              }
            `}
          >
            <ContactInfo />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;

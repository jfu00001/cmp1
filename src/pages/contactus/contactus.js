/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container, Box, TextField, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
import ContactInfo from "../../common/contactInfo/contactInfo";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import configData from "../../config.json";

const ContactUs = () => {
  const form = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(configData.serviceID, configData.templateID, form.current, {
        publicKey: configData.publicKey,
      })
      .then(
        () => {
          alert("SUCCESS!");
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  const { t } = useTranslation();

  const textFieldSx = {
    // Root class for the input field
    "& .MuiOutlinedInput-root": {
      // Class for the border around the input field
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#0C85A7 ",
        borderWidth: "1px",
      },
    },
    // Class for the label of the input field
    "& .MuiInputLabel-outlined": {
    },
  };

  return (
    <Container>
      <Box
        component="form"
        ref={form}
        onSubmit={handleSubmit}
        sx={{ mt: 10, mb: 10, pt: 5, pb: 5, pl: 5, pr: 5 }}
        style={{
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.12)",
          borderRadius: "10px",
          backgroundColor: "white",
          borderColor: "#0C85A7",
          borderWidth: "thin",
        }}
      >
        <Box
          sx={{
            mb: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "Left",
          }}
        >
          <Typography variant="h4" style={{ fontFamily: "CeraPro-Regular" }}>
            {t("contact-us.contact-us")}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: 2,
            }}
          >
            <TextField
              required
              id="firstName"
              name="firstName"
              label={t("contact-us.first-name")}
              autoComplete="given-name"
              variant="outlined"
              style={{ width: isMobile ? "100%" : "50%" }}
              sx={textFieldSx}
            />
            <TextField
              required
              id="lastName"
              name="lastName"
              label={t("contact-us.last-name")}
              autoComplete="family-name"
              variant="outlined"
              style={{ width: isMobile ? "100%" : "50%" }}
              sx={textFieldSx}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: 2,
            }}
          >
            <TextField
              required
              id="email"
              name="email"
              label={t("contact-us.email")}
              autoComplete="email"
              variant="outlined"
              style={{ width: isMobile ? "100%" : "50%" }}
              sx={textFieldSx}
            />
            <TextField
              required
              id="phoneNumber"
              name="phoneNumber"
              label={t("contact-us.phone-number")}
              autoComplete="tel"
              variant="outlined"
              style={{ width: isMobile ? "100%" : "50%" }}
              sx={textFieldSx}
            />
          </Box>
          <TextField
            id="message"
            name="message"
            label={t("contact-us.message")}
            fullWidth
            multiline
            rows={6}
            variant="outlined"
            sx={textFieldSx}
          />
        </Box>
        <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
          <Button
            css={css`
              margin-top: 24px;
              padding: 8px 24px;
              border-radius: var(--radius-lg-max-circle, 100px);
              background-color: var(--Brand-colors-deep_blue, #0c85a7);
              color: var(--color-typography-on-color---white, #fff);
              font: 16px/150% CeraPro-Regular;

              @media (max-width: 991px) {
                padding: 10px 20px;
                margin-bottom: 15px;
              }
            `}
            type="submit"
            variant="contained"
          >
            {t("contact-us.submit")}
          </Button>
        </Box>
      </Box>
      <Box sx={{ mb: 10 }}>
        <ContactInfo
          phone={t("contact-us.phone")}
          mail={t("contact-us.mail")}
          address={t("contact-us.address")}
          workTime={t("contact-us.work-time")}
        />
      </Box>
    </Container>
  );
};

export default ContactUs;

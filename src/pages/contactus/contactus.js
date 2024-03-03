import * as React from "react";
import { Container, Box, TextField, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phoneNumber: formData.get("phoneNumber"),
      message: formData.get("message"),
    });
  };

  const { t } = useTranslation();

  return (
    <Container
      component="form"
      onSubmit={handleSubmit}
      sx={{ mt: 10, mb: 10, pt: 5, pb: 5 }}
      style={{
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          mb: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5"> {t("contact-us.contact-us")}</Typography>
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
          />
          <TextField
            required
            id="lastName"
            name="lastName"
            label={t("contact-us.last-name")}
            autoComplete="family-name"
            variant="outlined"
            style={{ width: isMobile ? "100%" : "50%" }}
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
          />
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label={t("contact-us.phone-number")}
            autoComplete="tel"
            variant="outlined"
            style={{ width: isMobile ? "100%" : "50%" }}
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
        />
      </Box>
      <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
        <Button type="submit" variant="contained">
          {t("contact-us.submit")}
        </Button>
      </Box>
    </Container>
  );
};

export default ContactUs;

import BannerImage from "./aboutus.png";
import BannerWithText from "../../common/bannerwithtext/bannerwithtext";
import { Box } from "@mui/material";

function AboutUs() {
  return (
    <>
      <Box>
        <BannerWithText
          imgSrc={BannerImage}
          title="About Us"
          subtitle="Get to know the team"
        />
      </Box>
    </>
  );
}

export default AboutUs;

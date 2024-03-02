import BannerImage from "./aboutus.png";
import BannerWithText from "../../common/bannerwithtext/bannerwithtext";

function AboutUs() {
  return (
    <>
      <BannerWithText imgSrc={BannerImage} title="About Us" subtitle="Get to know the team"/>
    </>
  );
}

export default AboutUs;

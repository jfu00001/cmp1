import CarouselWithText from "../../common/carouselwithtext/carouselwithtext";
import { useTranslation } from "react-i18next";

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
    </>
  );
}

export default Home;

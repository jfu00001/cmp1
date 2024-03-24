import { Carousel } from "@material-tailwind/react";
import { Typography } from "@mui/material";
import { isMobile } from "react-device-detect";

function CarouselCustomNavigation(props) {
  let styles = {};
  if (isMobile) {
    styles = {
      height: "90vh",
      title: "h4",
      bannerStyle: {
        position: "absolute",
        left: "10%",
        top: "70%",
        width: "70vw",
        textAlign: "left",
        color: "white",
        textShadow: "0px 4px 8px rgba(0, 0, 0, 0.12)",
      },
    };
  } else {
    styles = {
      height: "90vh",
      title: "h2",
      bannerStyle: {
        position: "absolute",
        left: "10%",
        top: "70%",
        width: "40vw",
        textAlign: "left",
        color: "white",
        textShadow: "0px 4px 8px rgba(0, 0, 0, 0.12)",
      },
    };
  }

  return (
    <>
      <div className="carousel-with-text" style={{ height: styles.height }}>
        <Carousel
          transition={{ duration: 1 }}
          autoplay="true"
          loop="true"
          style={{ height: styles.height }}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-cyan-500" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {props.imageList.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`carousel-${index}`}
              className="h-full w-full object-cover"
            />
          ))}
        </Carousel>
        <div className="banner-text" style={styles.bannerStyle}>
          <Typography
            variant={styles.title}
            style={{ fontFamily: "CeraPro-Regular" }}
          >
            {props.title}
          </Typography>
        </div>
      </div>
    </>
  );
}

export default CarouselCustomNavigation;

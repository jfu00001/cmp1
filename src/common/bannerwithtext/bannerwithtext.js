import { Typography } from "@mui/material";
import { isMobile } from "react-device-detect";

function BannerWithText(props) {
  let styles = {};
  if (isMobile) {
    styles = { height: "40vh", title: "h4", subtitle: "subtitle1" };
  } else {
    styles = { height: "65vh", title: "h1", subtitle: "h5" };
  }

  return (
    <>
      <div className="banner-with-text" style={{ height: styles.height }}>
        <div
          className="banner-img"
          style={{
            height: "inherit",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${props.imgSrc}")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <div
            className="banner-text"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              textAlign: "center",
              transform: "translate(-50%, -50%)",
              color: "white",
              whiteSpace: "nowrap",
            }}
          >
            <Typography
              variant={styles.title}
              style={{ fontFamily: "CeraPro-Regular" }}
            >
              {props.title}
            </Typography>
            <Typography
              variant={styles.subtitle}
              style={{ fontFamily: "CeraPro-Regular" }}
            >
              {props.subtitle}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerWithText;

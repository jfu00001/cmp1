/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";

function LatestProjects(props) {

  return (
    <section
      css={css`
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        box-shadow: 0 4px 5px 6px rgba(0, 0, 0, 0.12);
        background-color: var(--Shades-whites-white, #fff);
        display: flex;
        flex-direction: column;
        padding: 32px;
        @media (max-width: 991px) {
          padding: 0 20px;
        }
      `}
    >
      <div
        css={css`
          width: 100%;
          @media (max-width: 991px) {
          }
        `}
      >
        <h2
          css={css`
            color: var(--Shades-blacks-black, #010a0d);
            font: 300 34px/150% Cera Pro, sans-serif;
            @media (max-width: 991px) {
              max-width: 100%;
            }
          `}
        >
          {props.title}
        </h2>
      </div>
      <div
        css={css`
          justify-content: space-between;
          margin-top: 24px;
          width: 100%;

          @media (max-width: 991px) {
          }
        `}
      >
        <div
          css={css`
            gap: 10px;
            display: flex;
            width: 100%;
            @media (max-width: 991px) {
              flex-direction: column;
              align-items: stretch;
              gap: 20px;
            }
          `}
        >
          {props.latestProjects.map((project) => (
            <Card
              css={css`
                width: 25%;
                @media (max-width: 991px) {
                  width: 100%;
                }
              `}
            >
              <CardMedia
                css={css`
                  aspect-ratio: 4 / 5;
                `}
                image={project.imageSrc}
              />
            </Card>
          ))}
        </div>
      </div>
      <Link to="/projects">
        <button
          css={css`
            margin-top: 24px;
            padding: 8px 24px;
            border-radius: var(--radius-lg-max-circle, 100px);
            background-color: var(--Brand-colors-deep_blue, #0c85a7);
            color: var(--color-typography-on-color---white, #fff);
            font: 16px/150% Cera Pro, sans-serif;

            @media (max-width: 991px) {
              padding: 10px 20px;
              margin-bottom: 15px;
            }
          `}
        >
          {props.seeMoreHere}
        </button>
      </Link>
    </section>
  );
}

export default LatestProjects;

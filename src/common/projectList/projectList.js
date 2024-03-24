/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const PoolCard = ({ imageSrc }) => (
  <Card
    css={css`
      width: 100%;
      margin: 20px 20px;
      @media (max-width: z 991px) {
        width: 100%;
      }
    `}
  >
    <CardMedia
      css={css`
        aspect-ratio: 5 / 4;
      `}
      image={imageSrc}
    />
  </Card>
);

function ProjectList(props) {
  return (
    <Container
      css={css`
        width: 100%;
        margin-top: 30px;
        margin-bottom: 30px;
        border-radius: 12px;
        box-shadow: 0 4px 5px 6px rgba(0, 0, 0, 0.12);
        background-color: #fff;
        padding-top: 20px;
        padding-bottom: 20px;
        @media (max-width: 991px) {
          width: 100%;
        }
      `}
    >
      <div
        css={css`
          width: 100%;
          padding-left: 20px;
          @media (max-width: 991px) {
            width: 100%;
          }
        `}
      >
        <h1
          css={css`
            margin-top: 8px;
            font: 34px "CeraPro-Regular";
            text-transform: capitalize;

          `}
        >
          {props.title}
        </h1>
      </div>
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          @media (max-width: 991px) {
            width: 100%;
            grid-template-columns: 1fr;
          }
        `}
      >
        {props.images.map((src) => (
          <div
            css={css`
              display: flex;
              width: 100%;
              @media (max-width: 991px) {
                width: 100%;
              }
            `}
          >
            <PoolCard imageSrc={src} />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default ProjectList;

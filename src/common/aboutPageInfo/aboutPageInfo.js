/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// Customized styling
const mainContainer = css`
  justify-content: center;
  border-radius: 12px;
  box-shadow: 0 4px 5px 6px rgba(0, 0, 0, 0.12);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 32px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const contentContainer = css`
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const textContainer = css`
  display: flex;
  flex-direction: column;
  line-height: normal;
  margin-left: 20px;
  gap: 20px;
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
    gap: 0;
  }
`;

const textStyles = css`
  color: var(--Shades-blacks-black, #010a0d);
  font-weight: 300;
  font-size: 16px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 20px;
  }
`;
const TextBlock = ({ content }) => (
  <p css={{ font: "300 16px/24px Inter, sans-serif", marginBottom: "24px" }}>
    {content}
  </p>
);

function AboutPageInfo(props) {
  return (
    <section css={mainContainer}>
      <div css={contentContainer}>
        <div
          css={css`
            gap: 20px;
            display: flex;
            @media (max-width: 991px) {
              flex-direction: column;
            }
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              line-height: normal;
              width: 100%;
              margin-left: 0;
              @media (max-width: 991px) {
                width: 100%;
              }
            `}
          >
            <img
              loading="lazy"
              src={props.imageSrc}
              alt="pool design info"
              css={css`
                object-fit: cover;
                width: 100%;
                @media (max-width: 991px) {
                  margin-top: 32px;
                }
              `}
            />
          </div>
          <div css={textContainer}>
            <div
              css={css`
                ${textStyles}
                color: var(--Brand-colors-deep_blue, #0C85A7);
                font-family: "Cera Pro", sans-serif;
              `}
            >
              {props.blueTitle}
            </div>
            <h2
              css={css`
                ${textStyles}
                margin-top: 8px;
                font: 34px "Cera Pro", sans-serif;
              `}
            >
              {props.title}
            </h2>
            <p
              css={css`
                ${textStyles}
                margin-top: 20px;
                font-family: "Cera Pro", sans-serif;
              `}
            >
              {props.p1}
            </p>
            <p
              css={css`
                ${textStyles}
                font-family: 'Inter', sans-serif;
                line-height: 24px;
              `}
            >
              {props.p2}
            </p>
          </div>
        </div>
        <div>
          <section
            css={{
              alignSelf: "stretch",
              color: "var(--Shades-blacks-black, #010A0D)",
              marginTop: "20px",
            }}
          >
            {props.textBlocks.map((block, index) => (
              <TextBlock key={index} content={block} />
            ))}
          </section>
        </div>
      </div>
    </section>
  );
}

export default AboutPageInfo;

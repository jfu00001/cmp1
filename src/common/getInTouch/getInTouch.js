/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 54px 32px;
  background-color: var(--Brand-colors-deep_blue, #0c85a7);

  @media (max-width: 991px) {
    padding: 25px 20px;
  }
`;

const innerContainerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 60px;
  color: var(--Shades-whites-white, #fff);
  font-weight: 400;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 0px;
  }
`;

const contentStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
`;

const titleStyles = css`
  text-align: center;
  font: 40px Cera Pro, sans-serif;
`;

const dividerStyles = css`
  width: 150px;
  height: 2px;
  margin-top: 16px;
  border-radius: var(--radius-lg-max-circle, 100px);
  background-color: var(--Brand-colors-light_blue, #51adc9);
`;

const descriptionStyles = css`
  align-self: stretch;
  margin-top: 16px;
  font: 18px/24px Cera Pro, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    text-align: center;
  }
`;

function GetInTouch(props) {
  return (
    <section css={containerStyles}>
      <div css={innerContainerStyles}>
        <div css={contentStyles}>
          <h2 css={titleStyles}>GET IN TOUCH</h2>
          <div css={dividerStyles} />
          <p css={descriptionStyles}>
            To get inspired and learn more about your new pool, contact{" "}
            <strong>Blue Lagoon Pools</strong> now.
          </p>
        </div>
      </div>
      <Link to="/contactus">
        <button
          css={css`
            margin-top: 24px;
            padding: 8px 24px;
            border-radius: var(--radius-lg-max-circle, 100px);
            background-color: var(--Brand-colors-sand, #c08950);
            color: var(--color-typography-on-color---white, #fff);
            font: 16px/150% Cera Pro, sans-serif;

            @media (max-width: 991px) {
              padding: 10px 20px;
              margin-bottom: 15px;
            }
          `}
        >
          Contact Us
        </button>
      </Link>
    </section>
  );
}

export default GetInTouch;

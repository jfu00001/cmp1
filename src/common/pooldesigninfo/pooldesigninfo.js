/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

// Customized styling
const mainContainer = css`
  justify-content: center;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 8px 0px;
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
  font-size: 16px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 20px;
  }
`;

const buttonStyle = css`
  margin-top: 24px;
  padding: 8px 24px;
  border-radius: var(--radius-lg-max-circle, 100px);
  background-color: var(--Brand-colors-deep_blue, #0c85a7);
  color: var(--color-typography-on-color---white, #fff);
  font: 16px/150% CeraPro-Regular;

  @media (max-width: 991px) {
    padding: 10px 20px;
    margin-bottom: 15px;
  }
`;

function PoolDesignInfo(props) {
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
          <div css={textContainer}>
            <h2
              css={css`
                ${textStyles}
                margin-top: 8px;
                font: 34px "CeraPro-Regular";
              `}
            >
              {props.title}
            </h2>
            <p
              css={css`
                ${textStyles}
                margin-top: 20px;
                font-family: "CeraPro-Regular";
              `}
            >
              {props.p1}
              <Link
                css={css`
                  color: #0c85a7;
                `}
                to="/services"
              >
                here
              </Link>
              .
            </p>
            <p
              css={css`
                ${textStyles}
                font-family: "CeraPro-Regular";
                line-height: 24px;
              `}
            >
              {props.p2}
            </p>
            <p
              css={css`
                ${textStyles}
                font-family: "CeraPro-Regular";
                line-height: 24px;
              `}
            >
              {props.p3}
            </p>
            <Link to="/aboutus" css={css`text-align: left;}`}>
              <button css={buttonStyle}> {props.buttonText}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PoolDesignInfo;

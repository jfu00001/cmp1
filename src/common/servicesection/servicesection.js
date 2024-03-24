/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const BorderedText = ({ children }) => (
  <div
    css={css`
      display: flex;
      font-family: Cera Pro, sans-serif;
      justify-content: center;
      border-radius: var(--radius-lg-max-circle, 100px);
      border: 1px solid rgba(1, 10, 13, 1);
      padding: 8px 24px;

      @media (max-width: 991px) {
        padding: 0 20px;
      }
    `}
  >
    {children}
  </div>
);

function ServiceSection(props) {
  return (
    <section
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 54px 32px;
        background-color: rgba(81, 173, 201, 0.1);
        text-align: center;

        @media (max-width: 991px) {
          padding: 0 20px;
        }
      `}
    >
      <h1
        css={css`
          color: var(--Shades-blacks-black, #010a0d);
          font: 300 34px/129% Cera Pro, sans-serif;

          @media (max-width: 991px) {
            max-width: 100%;
          }
        `}
      >
        {props.title}
      </h1>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-top: 24px;
          padding: 0 60px;
          font-size: 18px;
          @media (max-width: 991px) {
            padding: 0 20px;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <div
            css={css`
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              gap: 50px;
              color: var(--Shades-blacks-black, #010a0d);

              @media (max-width: 991px) {
                flex-wrap: wrap;
              }
            `}
          >
            {props.serviceItems.slice(0, 3).map((text, index) => (
              <BorderedText key={index}>{text}</BorderedText>
            ))}
          </div>
          <div
            css={css`
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              gap: 50px;
              margin-top: 12px;
              color: var(--Shades-blacks-darker, #1a2426);

              @media (max-width: 991px) {
                flex-wrap: wrap;
              }
            `}
          >
            {props.serviceItems.slice(3).map((text, index) => (
              <BorderedText key={index}>{text}</BorderedText>
            ))}
          </div>
        </div>
      </div>
      <Link to="/services">
        <button
          css={css`
            margin-top: 24px;
            padding: 8px 24px;
            border-radius: var(--radius-lg-max-circle, 100px);
            background-color: var(--Brand-colors-deep_blue, #0c85a7);
            color: var(--color-typography-on-color---white, #fff);
            font: 16px/150% Cera Pro, sans-serif;

            @media (max-width: 991px) {
              padding: 0 20px;
            }
          `}
        >
          {props.ourService}
        </button>
      </Link>
    </section>
  );
}

export default ServiceSection;

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const ServiceItem = ({ src, alt, text }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      width: 25%;
      @media (max-width: 991px) {
        width: 100%;
        margin-left: 0;
      }
    `}
  >
    <div
      css={css`
        text-align: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-self: stretch;
        font-size: 15px;
        @media (max-width: 991px) {
          margin-top: 40px;
          white-space: initial;
        }
      `}
    >
      <img
        loading="lazy"
        src={src}
        alt={alt}
        css={css`
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 75px;
          align-self: center;
        `}
      />
      <div
        css={css`
          font-family: "Cera Pro", sans-serif;
          margin-top: 12px;
        `}
      >
        {text}
      </div>
    </div>
  </div>
);

function PoolServices(props) {
  return (
    <section
      css={css`
        justify-content: center;
        background-color: rgba(81, 173, 201, 0.1);
        display: flex;
        padding: 50px 60px;
        @media (max-width: 991px) {
          padding: 0 20px;
        }
      `}
    >
      <div
        css={css`
          width: 100%;
          @media (max-width: 991px) {
            max-width: 100%;
          }
        `}
      >
        <div
          css={css`
            justify-content: center;
            display: ${props.serviceItemsDisplay};
            @media (max-width: 991px) {
              max-width: 100%;
              padding: 0 20px;
            }
          `}
        >
          <div
            css={css`
              justify-content: center;
              display: flex;
              gap: 20px;
              display: flex;
              @media (max-width: 991px) {
                flex-direction: column;
                align-items: stretch;
                gap: 0px;
              }
            `}
          >
            {props.serviceItems.map((item) => (
              <ServiceItem src={item.src} alt={item.alt} text={item.text} />
            ))}
          </div>
        </div>
        <div
          css={css`
            margin-top: 24px;
            display: flex;
            padding: 0 10vw;
            @media (max-width: 991px) {
              max-width: 100%;
              display: block;
              padding: 0 0;
            }
          `}
        >
          <div
            css={css`
            color: var(--Shades-blacks-black, #010a0d);
            font: 300 34px/44px sans-serif;
            text-align: right;
            width: 17vw;
            @media (max-width: 991px) {
              margin-top: 24px;
              width: 100%;
              text-align: center;
              font-size: 22px;
              line-height: inherit;
            }  
            }
          `}
          >
            {props.title}
          </div>
          <div
            css={css`
              width: 60vw;
              display: flex;
              flex-direction: column;
              font-size: 17px;
              color: var(--Shades-blacks-black, #010a0d);
              font-weight: 300;
              margin-left: 30px;
              @media (max-width: 991px) {
                width: 100%;
                margin: 32px 0 0 0;
                display: block;
                text-align: center;
              }
            `}
          >
            <div
              css={css`
                font-family: "Inter", sans-serif;
              `}
            >
              {props.p1}
            </div>
            <div
              css={css`
                font-family: "Inter", sans-serif;
                margin-top: 16px;
              `}
            >
              {props.p2}
            </div>
          </div>
        </div>
        <Link to="/services">
          <div
            css={css`
              width: fit-content;
              border-radius: var(--radius-lg-max-circle, 100px);
              background-color: var(--Brand-colors-deep_blue, #0c85a7);
              margin-top: 35px;
              color: var(--color-typography-on-color---white, #fff);
              padding: 8px 24px;
              font: 400 16px/150% "Cera Pro", sans-serif;
              margin-left: auto;
              margin-right: auto;
              @media (max-width: 991px) {
                margin-bottom: 30px;
              }
            `}
          >
            {props.ourService}
          </div>
        </Link>
      </div>
    </section>
  );
}
export default PoolServices;

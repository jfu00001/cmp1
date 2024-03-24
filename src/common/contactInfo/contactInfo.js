/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

const ContactInfo = (props) => (
  <div
    css={css`
      justify-content: space-between;
      border-radius: 12px;
      background-color: #0c85a7;
      padding: 20px 15px;
      @media (max-width: 991px) {
        padding: 10px 20px;
      }
    `}
  >
    <div
      css={css`
        gap: 20px;
        display: flex;
        @media (max-width: 991px) {
          flex-direction: column;
          align-items: stretch;
          gap: 0px;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 20%;
          @media (max-width: 991px) {
            width: 100%;
            margin-left: 0;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            gap: 15px;
            align-self: stretch;
            font-size: 20px;
            color: var(--Shades-whites-white, #fff);
            margin: auto 0;
            padding: 0 2px;
            @media (max-width: 991px) {
              margin-top: 10px;
            }
          `}
        >
          <div
            css={css`
              text-align: center;
              font-family: "CeraPro-Regular";
              line-height: 90%;
              margin: auto 0;
            `}
          >
            <CallIcon />
          </div>
          <div
            css={css`
              font-family: "CeraPro-Regular";
            `}
          >
            {props.phone}
          </div>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 25%;
          @media (max-width: 991px) {
            width: 100%;
            margin-left: 0;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            gap: 15px;
            align-self: stretch;
            font-size: 20px;
            color: var(--Shades-whites-white, #fff);
            margin: auto 0;
            padding: 0 2px;
            @media (max-width: 991px) {
              margin-top: 40px;
            }
          `}
        >
          <div
            css={css`
              text-align: center;
              font-family: "CeraPro-Regular";
              line-height: 90%;
              margin: auto 0;
            `}
          >
            <EmailIcon />
          </div>
          <div
            css={css`
              font-family: "CeraPro-Regular";
            `}
          >
            {props.mail}
          </div>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 25%;
          @media (max-width: 991px) {
            width: 100%;
            margin-left: 0;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            gap: 15px;
            align-self: stretch;
            font-size: 20px;
            color: var(--Shades-whites-white, #fff);
            margin: auto 0;
            padding: 0 2px;
            @media (max-width: 991px) {
              margin-top: 40px;
            }
          `}
        >
          <div
            css={css`
              text-align: center;
              font-family: "CeraPro-Regular";
              line-height: 90%;
              margin: auto 0;
            `}
          >
            <HomeIcon />
          </div>
          <div
            css={css`
              font-family: "CeraPro-Regular";
            `}
          >
            {props.address}
          </div>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 30%;
          @media (max-width: 991px) {
            width: 100%;
            margin-left: 0;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            gap: 15px;
            align-self: stretch;
            font-size: 20px;
            color: var(--Shades-whites-white, #fff);
            margin: auto 0;
            padding: 0 2px;
            @media (max-width: 991px) {
              margin-top: 40px;
              margin-bottom: 10px;
            }
          `}
        >
          <div
            css={css`
              text-align: center;
              font-family: "CeraPro-Regular";
              line-height: 90%;
              margin: auto 0;
            `}
          >
            <AccessTimeFilledIcon />
          </div>
          <div
            css={css`
              font-family: "CeraPro-Regular";
            `}
          >
            {props.workTime}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactInfo;

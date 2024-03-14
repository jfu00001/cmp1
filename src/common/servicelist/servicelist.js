/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ServiceCard = ({ title, description }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      justify-content: start;
      flex-grow: 1;
      width: 100%;
      padding: 16px 24px;
      border-radius: 12px;
      background-color: rgba(81, 173, 201, 0.1);
      color: var(--Shades-blacks-black, #010a0d);

      @media (max-width: 991px) {
        padding: 20px;
        margin: 0 10x;
      }
    `}
  >
    <h3
      css={css`
        font: 400 20px/150% Cera Pro, sans-serif;
        white-space: nowrap;

        @media (max-width: 991px) {
          white-space: initial;
        }
      `}
    >
      {title}
    </h3>
    <p
      css={css`
        margin-top: 8px;
        font: 300 16px/24px Cera Pro, sans-serif;
      `}
    >
      {description}
    </p>
  </div>
);

const servicesData1 = [
  {
    title: "Service name",
    description:
      "In addition to new pool designs, we also do pool renovations, from resurfacing the interior to adding a spa and installing digital controls. Or go all in with a spectacular full redesign. We'll breathe new life into your tired, old pool and transform it into a showpiece that adds value to your home.",
  },
  {
    title: "Service name",
    description:
      "In addition to new pool designs, we also do pool renovations, from resurfacing the",
  },
  {
    title: "Service name",
    description:
      "In addition to new pool designs, we also do pool renovations, from resurfacing the interior to adding a spa and installing digital controls. Or go all in with a spectacular full redesign. We'll breathe new life into your tired, old pool and transform it into a showpiece that adds value to your home.",
  },
  {
    title: "Service name",
    description:
      "In addition to new pool designs, we also do pool renovations, from resurfacing the interior to adding a spa and installing digital controls. Or go all in with a spectacular full redesign. We'll breathe new life into your tired,",
  },
];
const servicesData2 = [
  {
    title: "Service name",
    description:
      "In addition to new pool designs, we also do pool renovations, from resurfacing the interior to adding a spa and installing digital controls. Or go all in with a spectacular full redesign. We'll breathe new life into your tired, old pool and transform it into a showpiece that adds value to your home.",
  },
  {
    title: "Service name",
    description:
      "In addition to new pool designs, we also do pool renovations, from resurfacing the interior to adding a spa and installing digital controls. Or go all in with a spectacular full redesign. We'll breathe new life into your tired, old pool and transform it into a showpiece that adds value to your home.",
  },
  {
    title: "Service name",
    description:
      "In addition to new pool designs, we also do pool renovations, from resurfacing the interior to adding a spa and installing digital controls. Or go all in with a spectacular full redesign. We'll breathe new life into your tired, old pool and transform it into a showpiece that adds value to your home.",
  },
];

function ServiceList(props) {
  return (
    <section>
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 20px;
          margin: 50px 10vw;
          @media (max-width: 991px) {
            grid-template-columns: 1fr;
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
            margin: 0;
          }
        `}
      >
        {servicesData1.map((service, index) => {
          return (
            <div
              key={index}
              css={css`
                display: flex;
                flex-direction: column;
                line-height: normal;
                margin-left: ${index === 0 ? "0px" : "20px"};

                @media (max-width: 991px) {
                  width: 100%;
                  margin-left: 0;
                  padding: 10px;
                }
              `}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
              />
            </div>
          );
        })}
      </div>
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 20px;
          margin: 50px 10vw;
          @media (max-width: 991px) {
            grid-template-columns: 1fr;
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
            margin: 0;
          }
        `}
      >
        {servicesData2.map((service, index) => {
          return (
            <div
              key={index}
              css={css`
                display: flex;
                flex-direction: column;
                line-height: normal;
                ${'' /* width: 25%; */}
                margin-left: ${index === 0 ? "0px" : "20px"};

                @media (max-width: 991px) {
                  width: 100%;
                  margin-left: 0;
                  padding: 10px;
                }
              `}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ServiceList;

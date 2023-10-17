import React from "react";
import styled from "styled-components";

const PerceptionLikedContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > section {
    display: flex;
    gap: 2rem;
  }

  & > section:first-child {
    margin-bottom: 1.69rem;
  }

  & > section:last-child {
    margin-bottom: 2.938rem;
  }

  & > section > div > h6 {
    display: flex;
    font-size: 1rem;
    font-weight: var(--fw-regular);
    margin-bottom: 0.5rem;
    align-self: flex-start;
  }

  & > section > div > div {
    display: flex;
    align-items: center;
    gap: 0.38rem;
  }

  span {
    color: var(--color-gray);
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

const PerceptionLiked: React.FC = () => {
  return (
    <PerceptionLikedContainer>
      <section>
        <div>
          <h6>Fãs</h6>
          <div>
            <img
              src={require("../../../assets/icons/starIcon.svg").default}
              alt=""
            />
            <span>85</span>
          </div>
        </div>
        <div>
          <h6>Confiavel</h6>
          <div>
            <img
              src={require("../../../assets/icons/smileyIcon.svg").default}
              alt=""
            />
            <img
              src={require("../../../assets/icons/smileyIcon.svg").default}
              alt=""
            />
          </div>
        </div>
      </section>
      <section>
        <div>
          <h6>Legal</h6>
          <div>
            <img
              src={require("../../../assets/icons/thumbsUpIcon.svg").default}
              alt=""
            />
            <img
              src={require("../../../assets/icons/thumbsUpIcon.svg").default}
              alt=""
            />
            <img
              src={require("../../../assets/icons/thumbsUpIcon.svg").default}
              alt=""
            />
          </div>
        </div>
        <div>
          <h6>Sexy</h6>
          <div>
            <img
              src={require("../../../assets/icons/heartIcon.svg").default}
              alt=""
            />
            <img
              src={require("../../../assets/icons/heartIcon.svg").default}
              alt=""
            />
          </div>
        </div>
      </section>
    </PerceptionLikedContainer>
  );
};

export default PerceptionLiked;

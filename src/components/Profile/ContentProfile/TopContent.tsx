import React from "react";
import styled from "styled-components";
import PerceptionLiked from "./PerceptionLiked";
import icon from "../../../assets/icons/Triangle.svg"
import DataContent from "./DataContent";
import { useApi } from "../../../context/apiContext";

const TopContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 14.938rem;

  & > h4 {
    font-size: 1.25rem;
    font-weight: var(--fw-regular);
    margin-bottom: 1.48rem;
  }

  .bubbleImg {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin-bottom: 2rem;
    width: 17rem;
    height: 2.04231rem;
    background: #eff3f8;
    border-radius: 10px;
  }

  .bubbleImg img {
    position: absolute;
    left: 0.66rem;
    bottom: 1.3rem;
  }

  .bubbleImg p {
    font-size: 0.75rem;
    padding-left: 0.8rem;
    padding-bottom: 0.61rem;
    word-wrap: break-word;
    z-index: 2;
  }

  @media (min-width: 768px) {
    .bubbleImg {
      width: 25rem;
      height: 2.5rem;
    }

    .bubbleImg img {
      position: absolute;
      left: 1.32rem;
      bottom: 1.9rem;
    }

    .bubbleImg p {
      font-size: 1rem;
    }
  }

  @media (min-width: 1024px) {
    .bubbleImg {
      width: 25rem;
      height: 2.5rem;
      margin-bottom: 2rem;
      z-index: 2;
    }

    .bubbleImg img {
      position: absolute;
      left: 1.32rem;
      bottom: 1.8rem;
    }
  }

  @media (min-width: 1920px) {
    & > h4 {
      margin-bottom: 1rem;
    }

    .bubbleImg {
      width: 34rem;
      height: 2.46rem;
    }

    .bubbleImg img {
      position: absolute;
      left: 1.32rem;
      bottom: 1.8rem;
    }

    .bubbleImg p {
      padding-left: 0.75rem;
      padding-bottom: 0.7rem;
    }
  }
`;

const TopContent: React.FC = () => {
  const userData = useApi();
  return (
    <TopContentContainer>
      <h4>Boa Tarde, {userData.name}</h4>
      <div className="bubbleImg">
        <img src={icon} />
        <p>Programar sem café é igual poeta sem poesia.</p>
      </div>
      <PerceptionLiked />
      <DataContent />
    </TopContentContainer>
  );
};

export default TopContent;

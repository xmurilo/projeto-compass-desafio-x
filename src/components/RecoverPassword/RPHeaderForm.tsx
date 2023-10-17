import { FC } from "react";
import RPHeader from "./RPHeader";
import RPForm from "./RPForm";
import { RPFormHeaderWrapper } from "../styledComponents/RPFormHeaderStyled/RPFormHeaderWrapper";

const RPHeaderForm: FC = () => {
  return (
    <RPFormHeaderWrapper>
      <RPHeader />
      <RPForm />
    </RPFormHeaderWrapper>
  );
};

export default RPHeaderForm;

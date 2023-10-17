import React, { FC, Fragment } from "react";
import ChangePasswordHeaderForm from "../components/ChangePassword/ChangePasswordHeaderForm";
import Container from "../components/UI/Container/Container.styled";
import ContentUIBoxShadow from "../components/UI/Content/BoxShadowContentUI";
import Panel from "../components/UI/Panel/Panel";
import Footer from "../components/Footer/Footer";

const ChangePassword: FC = () => {
  return (
    <Fragment>
      <Container>
        <Panel />
        <ContentUIBoxShadow>
          <ChangePasswordHeaderForm />
        </ContentUIBoxShadow>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default ChangePassword;

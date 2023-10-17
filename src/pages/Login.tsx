import React, { useState, Fragment } from "react";
import LoginHeaderForm from "../components/Login/LoginHeaderForm";
import Container from "../components/UI/Container/Container.styled";
import Panel from "../components/UI/Panel/Panel";
import ContentUIBoxShadow from "../components/UI/Content/BoxShadowContentUI";
import Footer from "../components/Footer/Footer";

const LoginPage: React.FC = () => {
  return (
    <Fragment>
      <Container>
        <Panel />
        <ContentUIBoxShadow>
          <LoginHeaderForm />
        </ContentUIBoxShadow>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default LoginPage;

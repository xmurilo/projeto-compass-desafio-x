import { FC, Fragment } from "react";
import Container from "../components/UI/Container/Container.styled";
import Panel from "../components/UI/Panel/Panel";
import ContentUIBoxShadow from "../components/UI/Content/BoxShadowContentUI";
import RPHeaderForm from "../components/RecoverPassword/RPHeaderForm";
import Footer from "../components/Footer/Footer";

const RecoverPasswordPage: FC = () => {
  return (
    <Fragment>
      <Container>
        <Panel />
        <ContentUIBoxShadow>
          <RPHeaderForm />
        </ContentUIBoxShadow>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default RecoverPasswordPage;

import { FC, Fragment } from "react";
import ContentUIBoxShadow from "../UI/Content/BoxShadowContentUI";
import Container from "../UI/Container/Container.styled";
import InputsRegister from "./InputsRegister";
import Panel from "../UI/Panel/Panel";
import Footer from "../Footer/Footer";
const UserRegister: FC = () => {
  return (
    <Fragment>
      <Container>
        <Panel />
        <ContentUIBoxShadow>
          <InputsRegister />
        </ContentUIBoxShadow>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default UserRegister;

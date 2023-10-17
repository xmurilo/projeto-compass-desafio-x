import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../../UI/InputUI/CustomInput';
import CustomInputWrapper from '../../styledComponents/CustomInputWrapper/CustomInputWrapper.styled';
import Form from '../../styledComponents/Form/Form.styled';
import InputWraperEdit from '../../Profile/EditProfile/InputWrapperEdit.styled';
import Select from '../../styledComponents/SelectStyled/Select.styled';
import ListOption from '../../styledComponents/SelectStyled/ListOption';
import ButtonForm from '../../styledComponents/ButtonFormStyled/ButtonForm.styled';
import { useState } from 'react';
import Container from '../../UI/Container/Container.styled';
import CardProfileEditProfile from './CardEditProfile';
import BoxShadowContentUI from '../../UI/Content/BoxShadowContentUI';

const EditContentProfile: React.FC = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState<Boolean>(false);
  const [optionSelect, setOptionSelect] = useState<String>('');

  const toggleDropdown = (): void => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const getOption = (value: string): void => {
    setOptionSelect(value);
  };
  const router = useNavigate();

  return (
    <Container className="container_edit_profile">
      <CardProfileEditProfile />

      <BoxShadowContentUI className="container_edit">
        <Form className="form_edit">
          <h1 className="title_edit_profile">Editar informações</h1>
          <CustomInputWrapper>
            <InputWraperEdit>
              <div className="column_1">
                <CustomInput
                  type="text"
                  placeholder="Profissão"
                  className="input_edit_profession"
                  value={'Programador'}
                />
                <CustomInput
                  type="text"
                  placeholder="Nome"
                  className="input_name_edit"
                  value={'Gabriel Barbosa'}
                />
                <CustomInput
                  type="text"
                  placeholder="Cidade"
                  className="input_city_edit"
                  value={'São Paulo'}
                />
                <CustomInput
                  type="text"
                  placeholder="País"
                  className="input_country_edit"
                  value={'Brasil'}
                />
                <CustomInput
                  type="text"
                  placeholder="Nascimento"
                  maxLength={8}
                  className="input_birth_date_edit"
                  value={'01/01/2000'}
                />
                <CustomInput type="password" placeholder="Senha" className="input_password_edit" />
                <CustomInput
                  type="password"
                  placeholder="Repetir senha"
                  className="input_repeat_password_edit"
                />
              </div>

              <div className="column_2">
                <Select onClick={toggleDropdown} className="select_edit">
                  <span className="show_status">
                    {!optionSelect && 'Solteiro'}
                    {optionSelect && optionSelect}
                  </span>
                  {isDropdownVisible && <ListOption getOption={getOption} />}
                </Select>
              </div>
            </InputWraperEdit>
          </CustomInputWrapper>
        </Form>
        <ButtonForm onClick={() => router('/user')} className="button_form_edit">
          Salvar
        </ButtonForm>
      </BoxShadowContentUI>
    </Container>
  );
};
export default EditContentProfile;

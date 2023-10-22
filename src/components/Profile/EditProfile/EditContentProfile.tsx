import React, { useState } from 'react';
import CustomInput from '../../UI/InputUI/CustomInput';
import CustomInputWrapper from '../../styledComponents/CustomInputWrapper/CustomInputWrapper.styled';
import Form from '../../styledComponents/Form/Form.styled';
import InputWraperEdit from '../../Profile/EditProfile/InputWrapperEdit.styled';
import Select from '../../styledComponents/SelectStyled/Select.styled';
import ListOption from '../../styledComponents/SelectStyled/ListOption';
import ButtonForm from '../../styledComponents/ButtonFormStyled/ButtonForm.styled';
import Container from '../../UI/Container/Container.styled';
import CardProfileEditProfile from './CardEditProfile';
import BoxShadowContentUI from '../../UI/Content/BoxShadowContentUI';
import { useApi } from '../../../context/apiContext';
import Cookies from 'js-cookie';
import { IUserData } from '../../../context/apiContext';

const EditContentProfile: React.FC = () => {
  const userData = useApi();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [optionSelect, setOptionSelect] = useState('');

  const [editedData, setEditedData] = useState<IUserData | {}>({});

  const handleEditData = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setEditedData(prevState => ({ ...prevState, [name]: value }));
  };

  const toggleDropdown = (): void => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const getOption = (value: string): void => {
    setOptionSelect(value);
    setEditedData(prevState => ({ ...prevState, relationship: value }));
  };

  const handleEdit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const uid = Cookies.get('uid');
    const accessToken = Cookies.get('accessToken');

    const newUserData = {
      ...userData,
      ...editedData,
    };

    fetch(`http://localhost:3333/users/${uid}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUserData),
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else new Error('Falha ao atualizar os dados do usuário');
    });
  };

  return (
    <Container className='container_edit_profile'>
      <CardProfileEditProfile />

      <BoxShadowContentUI className='container_edit'>
        <Form onSubmit={handleEdit} className='form_edit'>
          <h1 className='title_edit_profile'>Editar informações</h1>
          <CustomInputWrapper>
            <InputWraperEdit>
              <div className='column_1'>
                <CustomInput
                  type='text'
                  name='profession'
                  placeholder='Profissão'
                  className='input_edit_profession'
                  onChange={handleEditData}
                  defaultValue={userData.profession}
                />
                <CustomInput
                  type='text'
                  placeholder='Nome'
                  name='name'
                  className='input_name_edit'
                  onChange={handleEditData}
                  defaultValue={userData.name}
                />
                <CustomInput
                  type='text'
                  placeholder='Cidade'
                  name='city'
                  className='input_city_edit'
                  onChange={handleEditData}
                  defaultValue={userData.city}
                />
                <CustomInput
                  type='text'
                  placeholder='País'
                  name='country'
                  className='input_country_edit'
                  onChange={handleEditData}
                  defaultValue={userData.country}
                />
                <CustomInput
                  type='date'
                  placeholder='Nascimento'
                  name='birthDate'
                  maxLength={8}
                  className='input_birth_date_edit'
                  onChange={handleEditData}
                  defaultValue={userData.birthDate}
                />
                <CustomInput
                  type='password'
                  placeholder='Senha'
                  className='input_password_edit'
                  onChange={handleEditData}
                  defaultValue={userData.password}
                />
                <CustomInput
                  type='password'
                  placeholder='Repetir senha'
                  className='input_repeat_password_edit'
                  onChange={handleEditData}
                />
              </div>

              <div className='column_2'>
                <Select onClick={toggleDropdown} className='select_edit'>
                  <span className='show_status'>
                    {!optionSelect && userData.relationship}
                    {optionSelect && optionSelect}
                  </span>
                  {isDropdownVisible && <ListOption getOption={getOption} />}
                </Select>
              </div>
            </InputWraperEdit>
          </CustomInputWrapper>
          <ButtonForm type='submit' className='button_form_edit'>
            Salvar
          </ButtonForm>
        </Form>
      </BoxShadowContentUI>
    </Container>
  );
};
export default EditContentProfile;

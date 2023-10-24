import React, { useEffect, useState } from 'react';
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
import { CircularProgress } from '@mui/material';

const EditContentProfile: React.FC = () => {
  const userData = useApi();
  const [sendData, setSendData] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [optionSelect, setOptionSelect] = useState('');

  const [editedData, setEditedData] = useState<IUserData>({} as IUserData);

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
    setIsLoading(true);
    e.preventDefault();
    const uid = Cookies.get('uid');
    const accessToken = Cookies.get('accessToken');

    if (editedData.password === undefined || editedData.repeatedPassword === undefined) {
      setHasError(true);
      setIsLoading(false);
      return;
    }

    if (editedData.password !== editedData.repeatedPassword) {
      setHasError(true);
      setIsLoading(false);
      return;
    }
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
        setSendData(true);
        return res.json();
      } else new Error('Failed to edit user');
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2350);
  }, [isLoading]);

  useEffect(() => {
    if (sendData) {
      window.location.reload();
    }
  }, [sendData]);

  if (isLoading) {
    return (
      <CircularProgress
        size={70}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#ed6d25',
        }}
      />
    );
  }

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
                {hasError ? (
                  <>
                    <CustomInput
                      type='password'
                      placeholder='Senha'
                      name='password'
                      className='input_password_edit invalid'
                      onChange={handleEditData}
                    />
                    <p className='errorText' style={{ position: 'relative', bottom: '20px' }}>
                      As senhas não correspondem
                    </p>
                    <CustomInput
                      type='password'
                      placeholder='Repetir senha'
                      className='input_repeat_password_edit invalid'
                      name='repeatedPassword'
                      onChange={handleEditData}
                    />
                    <p className='errorText' style={{ position: 'relative', bottom: '20px' }}>
                      As senhas não correspondem
                    </p>
                  </>
                ) : (
                  <>
                    <CustomInput
                      type='password'
                      placeholder='Senha'
                      name='password'
                      className='input_password_edit'
                      onChange={handleEditData}
                    />

                    <CustomInput
                      type='password'
                      placeholder='Repetir senha'
                      className='input_repeat_password_edit'
                      name='repeatedPassword'
                      onChange={handleEditData}
                    />
                  </>
                )}
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

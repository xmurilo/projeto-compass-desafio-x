import Logo from '../../assets/icons/ps_orkut.svg';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import CustomInput from '../UI/InputUI/CustomInput';
import { useState } from 'react';
import CustomInputWrapper from '../styledComponents/CustomInputWrapper/CustomInputWrapper.styled';
import Select from '../styledComponents/SelectStyled/Select.styled';
import ListOption from '../styledComponents/SelectStyled/ListOption';
import ButtonFormWrapper from '../styledComponents/ButtonFormStyled/ButtonFormWrapper.styled';
import ButtonForm from '../styledComponents/ButtonFormStyled/ButtonForm.styled';
import Form from '../styledComponents/Form/Form.styled';
import useInput from '../../hooks/validateForm';
import InputRegisterWrraper from './InputRegisterWrapper.styled';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebaseConfig';

const InputsRegister: FC = () => {
  const router = useNavigate();

  // * Roles for Inputs
  const isNotEmpty = (value: string): boolean => value.trim() !== '';
  const isEmail = (value: string): boolean => value.includes('@');

  // * Select States
  const [isDropdownVisible, setIsDropdownVisible] = useState<Boolean>(false);
  const [optionSelect, setOptionSelect] = useState<String>('');
  const [isTouch, setIsTouch] = useState<Boolean>(false);

  const toggleDropdown = (): void => {
    setIsDropdownVisible(!isDropdownVisible);
    setIsTouch(true);
  };

  const getOption = (value: string): void => {
    setOptionSelect(value);
  };

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputIsInvalid,
    valueChangeHandler: nameInputChandHandler,
    inputBlurHandler: nameInputBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(isEmail);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: enteredBirthDate,
    isValid: enteredBirthDateIsValid,
    hasError: birthDateHasError,
    valueChangeHandler: birthDateChangeHandler,
    inputBlurHandler: birthDateBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: enteredProfession,
    isValid: enteredProfessionIsValid,
    hasError: professionHasError,
    valueChangeHandler: professionChangeHandler,
    inputBlurHandler: professionBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: enteredCountry,
    isValid: enteredCountryIsValid,
    hasError: countryHasError,
    valueChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
  } = useInput(isNotEmpty);

  let formIsValid: boolean = false;
  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredPasswordIsValid &&
    enteredBirthDateIsValid &&
    enteredProfessionIsValid &&
    enteredCountryIsValid &&
    enteredCityIsValid &&
    optionSelect
  ) {
    formIsValid = true;
  }

  const selectHasError = !optionSelect && isTouch;

  const handleSumbmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    await createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
      .then(userCredential => {
        console.log(userCredential);
        const newUser = {
          id: userCredential.user.uid,
          name: enteredName,
          email: enteredEmail,
          password: enteredPassword,
          birthDate: enteredBirthDate,
          country: enteredCountry,
          city: enteredCity,
          profession: enteredProfession,
          relationship: optionSelect,
        };
        fetch('http://localhost:3333/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newUser),
        });
      })
      .catch(err => {
        alert(err);
      });
    router('/login');
  };

  const emailClasses = emailHasError ? 'input_register_email invalid' : 'input_register_email';

  const passwordClasses = passwordHasError
    ? 'input_register_password invalid'
    : 'input_register_password';

  const nameClasses = nameInputIsInvalid ? 'input_register_name invalid' : 'input_register_name';

  const birthDateClasses = birthDateHasError
    ? 'input_register_birth_date invalid'
    : 'input_register_birth_date';

  const professionClasses = professionHasError
    ? 'input_register_profession invalid'
    : 'input_register_profession';

  const countryClasses = countryHasError
    ? 'input_register_country invalid'
    : 'input_register_country';

  const cityClasses = cityHasError ? 'input_register_city invalid' : 'input_register_city';

  const optionClasses = selectHasError ? 'select_register invalid' : 'select_register';

  return (
    <>
      <Form onSubmit={handleSumbmit} className='form_register'>
        <div className='container_logo'>
          <img src={Logo} alt='Logo' />
          <h2 className='title_register'>Cadastre-se no UOLkut</h2>
        </div>
        <InputRegisterWrraper>
          <CustomInputWrapper>
            <div>
              <CustomInput
                type={'email'}
                placeholder='E-mail'
                value={enteredEmail}
                className={emailClasses}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                required
              />
              {emailHasError && <p className='errorText'>E-mail inválido</p>}
            </div>

            <div>
              <CustomInput
                type={'password'}
                placeholder='Senha'
                value={enteredPassword}
                className={passwordClasses}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
                required
              />
              {passwordHasError && <p className='errorText'>Este campo não pode ficar vazio</p>}
            </div>

            <div>
              <CustomInput
                type='text'
                placeholder='Nome'
                value={enteredName}
                className={nameClasses}
                onChange={nameInputChandHandler}
                onBlur={nameInputBlurHandler}
                required
              />
              {nameInputIsInvalid && <p className='errorText'>Este campo não pode ficar vazio</p>}
            </div>
            <div className='column_1'>
              <div>
                <CustomInput
                  type='text'
                  placeholder='Nascimento'
                  value={enteredBirthDate}
                  maxLength={8}
                  className={birthDateClasses}
                  onChange={birthDateChangeHandler}
                  onBlur={birthDateBlurHandler}
                  required
                />
                {birthDateHasError && <p className='errorText'>Este campo não pode ficar vazio</p>}
              </div>
              <div>
                <CustomInput
                  type='text'
                  placeholder='Profissão'
                  value={enteredProfession}
                  className={professionClasses}
                  onChange={professionChangeHandler}
                  onBlur={professionBlurHandler}
                  required
                />
                {professionHasError && <p className='errorText'>Este campo não pode ficar vazio</p>}
              </div>
            </div>
            <div className='column_2'>
              <div>
                <CustomInput
                  type='text'
                  placeholder='País'
                  value={enteredCountry}
                  className={countryClasses}
                  onChange={countryChangeHandler}
                  onBlur={countryBlurHandler}
                  required
                />
                {countryHasError && <p className='errorText'>Este campo não pode ficar vazio</p>}
              </div>

              <div>
                <CustomInput
                  type='text'
                  placeholder='Cidade'
                  value={enteredCity}
                  className={cityClasses}
                  onChange={cityChangeHandler}
                  onBlur={cityBlurHandler}
                  required
                />
                {cityHasError && <p className='errorText'>Este campo não pode ficar vazio</p>}
              </div>
            </div>
            <Select onClick={toggleDropdown} className={optionClasses}>
              <span className='show_status'>
                {!optionSelect && 'Relacionamento'}
                {optionSelect && optionSelect}
              </span>
              {isDropdownVisible && <ListOption getOption={getOption} />}
            </Select>
            <ButtonFormWrapper>
              <ButtonForm className='button_form_register'>Criar Conta</ButtonForm>
            </ButtonFormWrapper>
          </CustomInputWrapper>
        </InputRegisterWrraper>
      </Form>
    </>
  );
};
export default InputsRegister;

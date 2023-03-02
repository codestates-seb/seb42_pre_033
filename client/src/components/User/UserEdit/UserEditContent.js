import styled from 'styled-components';
import ImageUpload from './ImageUpload';
import Button from '../../UI/Button';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditContent = styled.div`
  padding: 8px;
  margin-bottom: 30px;
`;

const EditTitle = styled.h3`
  width: 835px;
  padding-bottom: 16px;
  margin-bottom: 24px;
  font-size: 27px;
  border-bottom: 1px solid var(--black-200);
`;

const InfoTitle = styled.h4`
  font-size: 21px;
  padding-bottom: 8px;
`;

const InfoEdit = styled.form`
  width: 835px;
  height: auto;
  border: 1px solid var(--black-075);
  border-radius: 5px;
  padding: 24px;
  margin-bottom: 30px;
`;

const InputTitle = styled.h5`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 4px;
  padding: 2px;
`;

const InputText = styled.input`
  width: 421px;
  height: 33px;
  margin-bottom: 10px;
  font-size: 13px;
  text-indent: 8px;
  border: 1px solid var(--black-200);
  border-radius: 4px;
`;

const Password = styled.div``;

const InvalidPassword = styled.div`
  font-size: 13px;
  color: var(--red-400);
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  width: 165px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
`;

const Cancel = styled.button`
  background-color: #fff;
  border: transparent;
  padding: 10px;
  border-radius: 3px;
  font-size: 13px;
  color: var(--blue-500);

  :hover {
    background-color: var(--powder-050);
  }
`;

function UserEditContent({ users }) {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const onChangeNickname = (event) => {
    setNickname(event.target.value);
  };

  const onChangePassword = (event) => {
    const passwordRegex = /^.{4,20}$/;
    if (!event.target.value || passwordRegex.test(event.target.value))
      setPasswordError(false);
    else setPasswordError(true);

    if (!confirmPassword || event.target.value === confirmPassword)
      setConfirmPasswordError(false);
    else setConfirmPasswordError(true);
    setPassword(event.target.value);
  };

  const onChangeConfirmPassword = (event) => {
    if (password === event.target.value) setConfirmPasswordError(false);
    else setConfirmPasswordError(true);
    setConfirmPassword(event.target.value);
  };

  const validation = () => {
    if (!password) setPasswordError(true);
    if (!confirmPassword) setConfirmPasswordError(true);

    if (password && confirmPassword) return true;
    else return false;
  };

  const BASE_URL = 'http://localhost:3000/';
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    if (validation()) return;

    event.preventDefault();
    axios
      .patch(`${BASE_URL}/members`, { nickname, password })
      .then((response) => {
        console.log(response.data);
        navigate('/users');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCancel = () => {
    navigate('/users');
  };

  return (
    <EditContent>
      <section>
        <EditTitle>Edit your profile</EditTitle>
        <InfoTitle>Public information</InfoTitle>
      </section>
      {users.map(({ name, id, title, location }) => (
        <InfoEdit key={id} onSubmit={handleSubmit}>
          <InputTitle>Profile image</InputTitle>
          <ImageUpload />
          <InputTitle>Username</InputTitle>
          <InputText defaultValue={name} required onChange={onChangeNickname} />
          <InputTitle>Location</InputTitle>
          <InputText defaultValue={location} disabled />
          <InputTitle>Title</InputTitle>
          <InputText defaultValue={title} disabled />
          <InputTitle>Password</InputTitle>
          <Password>
            <InputText
              type='password'
              required
              maxLength={20}
              value={password}
              onChange={onChangePassword}
            />
            {passwordError && (
              <InvalidPassword>
                Password must be between 4-20 digits.{' '}
              </InvalidPassword>
            )}
          </Password>
          <InputTitle>Password Check</InputTitle>
          <Password>
            <InputText
              required
              type='password'
              maxLength={20}
              value={confirmPassword}
              onChange={onChangeConfirmPassword}
            />
            {confirmPasswordError && (
              <InvalidPassword>
                Those passwords didn&apos;t match.
              </InvalidPassword>
            )}
          </Password>
          <ButtonWrapper>
            <Button variant='question'>Save Profile</Button>
            <Cancel onClick={handleCancel}>Cancel</Cancel>
          </ButtonWrapper>
        </InfoEdit>
      ))}
    </EditContent>
  );
}

export default UserEditContent;

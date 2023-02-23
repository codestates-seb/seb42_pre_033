import styled from 'styled-components';
import ImageUpload from './ImageUpload';
import Button from '../../UI/Button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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

const Editor = styled.div`
  margin-bottom: 30px;
`;

const QuilEditor = styled(ReactQuill)`
  width: 785px;
  height: 255px;
  padding-bottom: 0px;
`;

const ButtonWrapper = styled.div`
  width: 165px;
  margin-top: 70px;
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
  console.log(users);
  return (
    <EditContent>
      <section>
        <EditTitle>Edit your profile</EditTitle>
        <InfoTitle>Public information</InfoTitle>
      </section>
      {users.map(({ name, id, title, location, aboutme }) => (
        <InfoEdit key={id}>
          <InputTitle>Profile image</InputTitle>
          <ImageUpload />
          <InputTitle>Display name</InputTitle>
          <InputText defaultValue={name} />
          <InputTitle>Location</InputTitle>
          <InputText defaultValue={location} />
          <InputTitle>Title</InputTitle>
          <InputText defaultValue={title} />
          <InputTitle>About me</InputTitle>
          <Editor>
            <QuilEditor theme='snow' value={aboutme} />
          </Editor>
          <ButtonWrapper>
            <Button variant='question'>Save Profile</Button>
            <Cancel>Cancel</Cancel>
          </ButtonWrapper>
        </InfoEdit>
      ))}
    </EditContent>
  );
}

export default UserEditContent;

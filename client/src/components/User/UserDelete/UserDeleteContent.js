import styled from 'styled-components';
import Button from '../../UI/Button';
import { useState } from 'react';

const DeleteContent = styled.div`
  width: 835px;
  height: 543px;
  padding: 8px;
  margin-bottom: 30px;
  font-size: 15px;
  line-height: 22.5px;
`;

const DeleteTitle = styled.h3`
  width: 835px;
  padding-bottom: 16px;
  margin-bottom: 24px;
  font-size: 27px;
  border-bottom: 1px solid var(--black-200);
`;
const Deletetext = styled.p`
  margin-bottom: 16.5px;
`;
const DeleteFact = styled.ul`
  margin: 0 0 16.5px 30px;
`;
const DeleteFactList = styled.li`
  list-style: disc;
`;

const DeleteForm = styled.form`
  height: 106.8px;
`;

const CheckWrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  margin-bottom: 24px;
`;
const DeleteCheck = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background-color: yellow;
`;
const DeleteValue = styled.label`
  margin-top: -2px;
`;

function UserDeleteContent() {
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    setAgree(!agree);
  };

  return (
    <DeleteContent>
      <section>
        <DeleteTitle>Delete your profile</DeleteTitle>
        <Deletetext>
          Before confirming that you would like your profile deleted, we&apos;d
          like to take a moment to explain the implications of deletion:
        </Deletetext>
        <DeleteFact>
          <DeleteFactList>
            Deletion is irreversible, and you will have no way to regain any of
            your original content, should this deletion be carried out and you
            change your mind later on.
          </DeleteFactList>
          <DeleteFactList>
            Your questions and answers will remain on the site, but will be
            disassociated and anonymized (the author will be listed as
            &quot;user21216637&quot;) and will not indicate your authorship even
            if you later return to the site.
          </DeleteFactList>
        </DeleteFact>
        <Deletetext>
          Confirming deletion will only delete your profile on Stack Overflow -
          it will not affect any of your other profiles on the Stack Exchange
          network. If you want to delete multiple profiles, you&apos;ll need to
          visit each site separately and request deletion of those individual
          profiles.
        </Deletetext>
        <DeleteForm>
          <CheckWrap>
            <DeleteCheck
              type={'checkbox'}
              id='deletecheck'
              onChange={checkboxHandler}
            ></DeleteCheck>
            <DeleteValue htmlFor='deletecheck'>
              I have read the information stated above and understand the
              implications of having my profile deleted. I wish to proceed with
              the deletion of my profile.
            </DeleteValue>
          </CheckWrap>
          <Button variant='delete' disabled={!agree}>
            Delete profile
          </Button>
        </DeleteForm>
      </section>
    </DeleteContent>
  );
}

export default UserDeleteContent;

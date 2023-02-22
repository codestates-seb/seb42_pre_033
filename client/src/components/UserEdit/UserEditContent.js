import styled from 'styled-components';
import ImageUpload from './ImageUpload';
import { USERS } from './UserDummy';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const EditContent = styled.div`
  ck.ck-editor__editable:not(.ck-editor__nested-editable) {
    min-height: 400px;
    margin-bottom: 20px;

    .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
      min-height: 500px;
    }
  }
`;

const EditTitle = styled.h3``;

const Underbar = styled.div``;

const InfoTitle = styled.h4``;

const InfoEdit = styled.div`
  width: 835px;
  height: 758px;
  border: 1px solid #000;
  padding: 16px;
`;

const InputTitle = styled.h5``;

const Editor = styled.div`
  width: 100%;
  height: 90%;
`;

function UserEditContent() {
  return (
    <EditContent>
      <div>
        <EditTitle>Edit your profile</EditTitle>
        <Underbar />
        <InfoTitle>Public information</InfoTitle>
      </div>
      {USERS.map(({ users }) =>
        users.map(({ name, id, title, location, aboutme }) => (
          <InfoEdit key={id}>
            <InputTitle>Profile image</InputTitle>
            <ImageUpload />
            <InputTitle>Display name</InputTitle>
            <input defaultValue={name} />
            <InputTitle>Location</InputTitle>
            <input defaultValue={location} />
            <InputTitle>Title</InputTitle>
            <input defaultValue={title} />
            <InputTitle>About me</InputTitle>
            <Editor>
              <CKEditor
                editor={ClassicEditor}
                data={aboutme}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                }}
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  // console.log("Editor is ready to use!", editor);
                  editor.editing.view.change((writer) => {
                    writer.setStyle(
                      'min-height',
                      '300px',
                      editor.editing.view.document.getRoot(),
                    );
                  });
                }}
              />
            </Editor>
          </InfoEdit>
        )),
      )}
    </EditContent>
  );
}

export default UserEditContent;

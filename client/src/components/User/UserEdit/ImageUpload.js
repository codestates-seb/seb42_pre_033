import { useRef, useState } from 'react';
import styled from 'styled-components';

const ProfilePicture = styled.div`
  width: 164px;
  height: 164px;
  position: relative;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
`;

const ProfileImg = styled.img`
  border-radius: 5px;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
`;

const ChangeText = styled.div`
  width: 100%;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 13px;
  color: var(--white);
  background-color: var(--black-600);
  border-radius: 0 0 5px 5px;
  cursor: pointer;
`;

function ImageUpload() {
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);
  const [Image, setImage] = useState('http://localhost:3000/image/profile.png');

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div>
      <input
        type='file'
        accept='image/*'
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{
          display: 'none',
        }}
      />
      <ProfilePicture
        role='presentation'
        onClick={() => imageUploader.current.click()}
      >
        <ProfileImg
          src={Image}
          ref={uploadedImage}
          style={{
            width: '100%',
            height: '100%',
          }}
          alt=''
        />
        <ChangeText>Change Profile</ChangeText>
      </ProfilePicture>
    </div>
  );
}

export default ImageUpload;

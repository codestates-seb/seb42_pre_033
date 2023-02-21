import { useRef, useState } from 'react';
import styled from 'styled-components';

const ProfilePicture = styled.div`
  width: 150px;
  height: 150px;
  background-color: pink;
  position: relative;
`;

const ChangeText = styled.div`
  background-color: pink;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
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
        <img
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

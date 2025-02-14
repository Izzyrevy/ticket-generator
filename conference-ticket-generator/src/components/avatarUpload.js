import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const AvatarUpload = ({ onUpload }) => {
  const [imageUrl, setImageUrl] = useState('');

  const onDrop = useCallback(async (acceptedFiles) => {
    console.log('Accepted files:', acceptedFiles);
    const file = acceptedFiles[0];
    console.log('Uploading file:', file);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'izzyrev99');

    try {
      const response = await axios.post(`https://api.cloudinary.com/v1_1/dnt8zlnkd/upload`, formData);
      const url = response.data.secure_url;
      setImageUrl(url);
      onUpload(url);
      localStorage.setItem('avatarUrl', url); 
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }, [onUpload]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div 
      {...getRootProps()} 
      style={{ 
        border: '2px solid #09798a', 
        backgroundColor: '#041E23', 
        width: '100%', 
        maxWidth: '580px',
        borderRadius: '10px', 
        cursor: 'pointer', 
        display: 'block', 
        position: 'relative', 
        overflow: 'hidden'
      }}
    >
      <input {...getInputProps()} />
      {!imageUrl ? (
        <p style={{ 
          color: '#fff', 
          textAlign: 'center', 
          margin: 0, 
          padding: '30px' 
        }}>
          Drag and drop your avatar here, or click to select files
        </p>
      ) : (
        <img 
          src={imageUrl} 
          alt="Avatar" 
          style={{ 
            width: '100%', 
            maxWidth: '200px',
            objectFit: 'cover', 
            borderRadius: '10px' 
          }} 
        />
      )}
    </div>
  );
};

export default AvatarUpload;
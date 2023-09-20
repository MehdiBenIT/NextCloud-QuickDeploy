import React, { useState } from 'react';
import axios from 'axios';

const NextCloudForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [logo, setLogo] = useState('');
  const [preferColor, setPreferColor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nextCloudConfig = {
      username,
      password,
      logo,
      preferColor
    };

    try {
      const response = await axios.post('http://localhost:3010/configure-nc', nextCloudConfig);
      console.log('Server Response:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <label>
        Logo URL (Optional):
        <input type="text" value={logo} onChange={(e) => setLogo(e.target.value)} />
      </label>
      <label>
        Preferred Color (Optional):
        <input type="color" value={preferColor} onChange={(e) => setPreferColor(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NextCloudForm;

"use client";
import { useState } from "react";



const SignupContainer = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    surname: '',
    email: '',
    user_type: 'user', // varsayılan olarak 'user' seçili olabilir
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:3000/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),

      });

      if (response.ok) {
        const data = await response.json();
        console.log('Signup successful', data);
        // Başarılı kayıt sonrası yapılacak işlemler
      } else {
        const errorData = await response.json();
        console.error('Signup failed', errorData);
        // Hata durumu ile ilgili işlemler
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="surname"
        placeholder="Surname"
        value={formData.surname}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <select
        name="user_type"
        value={formData.user_type}
        onChange={handleChange}
        required
      >
        <option value="user">User</option>
        <option value="company">Company</option>
      </select>
      <button type="submit" >Signup</button>
    </form>
  );
}
export default SignupContainer;
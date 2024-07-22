"use client";


import Link from "next/link";
import SignupContainer from "./signup";

const authenticateUser = async (username:string, password:string) => {
  try {
    const response = await fetch('http://localhost:3000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Login successful', data);
      // Başarılı giriş sonrası yapılacak işlemler
      return { isLoggedIn: true, token: data.token };
    } else {
      const errorData = await response.json();
      console.error('Login failed', errorData);
      // Hata durumu ile ilgili işlemler
      return { isLoggedIn: false, message: errorData.message };
    }
  } catch (error) {
    console.error('Error:', error);
    return { isLoggedIn: false, message: 'Network error' };
  }
};

const Login = ({ setLogin }: { setLogin: () => void }) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    authenticateUser(e.target[0].value, e.target[1].value).then((data) => {
      if (data.isLoggedIn) {
        return setLogin();
      }
      if (!data.isLoggedIn) {
        return alert(data.message);
      }
    });
    console.log(e.target[0].value, e.target[1].value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "300px",
        margin: "auto",
        marginTop: "100px",
      }}
    >
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", gap: "10px", flexDirection: "column" }}
      >
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <div>
        <h1>Signup</h1>
        <SignupContainer />
      </div>
    </div>
  );
};

export default Login;
"use client";

import { useState } from "react";
import Login from "@/component/login";



/* export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}; */

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isLogin, setIsLogin] = useState(false);


    const handleLogin = () => {
        setIsLogin(true);
    };


    return (
        <>{isLogin ? children : <Login setLogin={handleLogin} />}</>

    );
}
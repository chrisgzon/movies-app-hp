import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import Swal from "sweetalert2";

const useAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(user.accessToken));
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Inicio de Sesion Fallido",
        text: error.message,
      });
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(user.accessToken));
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registro Fallido",
        text: error.message,
      });
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
  };
};

export default useAuth;

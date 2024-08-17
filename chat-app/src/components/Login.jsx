import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider, signInWithPopup } from "../firebase.js";

const Login = () => {

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => console.log(result))
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://s0.rbk.ru/v6_top_pics/media/img/2/03/756723938116032.jpg"
          alt="whatsapp"
        />
        <div className="login__text">
          <h1>Sign in to Chat App</h1>
        </div>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
};
export default Login;

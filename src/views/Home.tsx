import React from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../modules/signIn";

export function Homepage() {
  const dispatch = useDispatch();

  const handleAdminLogin = () => {
    dispatch(signIn("Admin"));
  };

  const handleUserLogin = () => {
    dispatch(signIn("Manager"));
  };
  return (
    <div>
      <div className="container">
        <div className="auth-box">
          <button className="auth-box__item" onClick={handleAdminLogin}>
            Admin login
          </button>
          <button className="auth-box__item" onClick={handleUserLogin}>
            Manager login
          </button>
        </div>
      </div>
    </div>
  );
}

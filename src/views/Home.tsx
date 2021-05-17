import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../components";
import { signIn } from "../modules/signIn";

export function Homepage() {
  const dispatch = useDispatch();

  const handleAdminLogin = () => {
    dispatch(signIn("Admin"));
  };

  const handleManagerLogin = () => {
    dispatch(signIn("Manager"));
  };

  return (
    <div>
      <div className="container">
        <div className="admin-page">
          <div className="card s-bottom-sml">
            <Button
              type="button"
              variant="primary"
              size="medium"
              isDisabled={false}
              onClick={handleAdminLogin}
            >
              <div className="t-center"> Admin login</div>
            </Button>
          </div>
          <div className="card s-bottom-sml">
            <Button
              type="button"
              variant="primary-ghost"
              size="medium"
              isDisabled={false}
              onClick={handleManagerLogin}
            >
              <div className="t-center">Manager login</div>
            </Button>
          </div>
          <div className="card s-bottom-sml">
            <Link to="/component">Component</Link>
          </div>
          <div className="card">
            <Link to="/imperative">Imperative</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

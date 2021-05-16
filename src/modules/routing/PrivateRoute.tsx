import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, RouteProps, useHistory, useLocation } from "react-router-dom";
import { sessionCache } from "../signIn/cache";
import { RootState } from "../store";

interface Props extends RouteProps {
  roleRequirements?: string[];
}
export const PrivateRoute: React.FC<Props> = (props) => {
  const { roleRequirements, children, ...rest } = props;
  const history = useHistory();
  const location = useLocation();
  const session = sessionCache().getSession();
  const user = useSelector((state: RootState) => state.signIn.user);

  useEffect(() => {
    if (!session) {
      history.push("/signin");
    }
  }, [history, session, user, location]);

  useEffect(() => {
    if (
      session &&
      roleRequirements &&
      !roleRequirements.includes(session?.role)
    ) {
      history.push("/unauthorized");
    }
  }, [history, roleRequirements, session, location]);

  return <Route {...rest} render={() => children} />;
};

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Admin, NoMatch, Unauthorized } from "../../views";
import { Homepage } from "../../views/Home";
import { buildAbilityFor } from "../authorization";
import { PrivateRoute } from "../routing/PrivateRoute";
import { logOff, signInSuccess } from "../signIn";
import { sessionCache } from "../signIn/cache";

export function Routing() {
  const dispatch = useDispatch();
  const session = sessionCache().getSession();

  useEffect(() => {
    if (session) {
      dispatch(signInSuccess({ ...session }));
      buildAbilityFor(session.role);
    } else {
      dispatch(logOff());
    }
  }, [dispatch, session]);

  return (
    <Switch>
      <Route path="/" exact>
        <Homepage />
      </Route>
      <Route path="/signin" exact>
        <Homepage />
      </Route>
      <PrivateRoute
        roleRequirements={["Admin", "Manager"]}
        path={"/admin"}
        exact
      >
        <Admin />
      </PrivateRoute>
      <Route path="/unauthorized" exact>
        <Unauthorized />
      </Route>
      <Route>
        <NoMatch />
      </Route>
    </Switch>
  );
}

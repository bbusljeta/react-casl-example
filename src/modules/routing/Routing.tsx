import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ComponentExample, NoMatch } from "../../views";
import { Homepage } from "../../views/Home";
import { Imperative } from "../../views/Imperative";
import { buildAbilityFor } from "../authorization";
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
      <Route path="/imperative" exact>
        <Imperative />
      </Route>
      <Route path="/component" exact>
        <ComponentExample />
      </Route>
      <Route>
        <NoMatch />
      </Route>
    </Switch>
  );
}

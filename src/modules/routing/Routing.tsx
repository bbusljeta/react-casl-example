import { Route, Switch } from "react-router-dom";
import { Homepage } from "../../views/Home";

export function Routing() {
  return (
    <Switch>
      <Route path="/" strict>
        <Homepage />
      </Route>
    </Switch>
  );
}

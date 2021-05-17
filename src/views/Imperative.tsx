import React from "react";
import { useAbility } from "@casl/react";
import { AbilityContext } from "../modules/authorization";
import { Button } from "../components";

export function Imperative() {
  const ability = useAbility(AbilityContext);

  const handleAction = () => {
    ability.can("view", "AdminText") && window.alert("My message");
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
              onClick={handleAction}
            >
              <div className="t-center">Some Action</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

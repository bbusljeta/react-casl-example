import React from "react";
import { Button } from "../components";
import { Can } from "../modules/authorization";

export function ComponentExample() {
  return (
    <div>
      <div className="container">
        <div className="admin-page">
          <Can I="view" a="AdminText">
            <div className="card">
              <p className="card__title">Only Admin can see this</p>
              <Button
                type="button"
                variant="primary"
                size="medium"
                isDisabled={false}
                onClick={() => console.log("submit: ")}
              >
                <div className="t-center">Admin action</div>
              </Button>
            </div>
          </Can>
          <Can I="view" a="ManagerText">
            <div className="card">
              <p className="card__title">Only Manager can see this</p>
              <Button
                type="button"
                variant="primary-ghost"
                size="medium"
                isDisabled={false}
                onClick={() => console.log("submit: ")}
              >
                <div className="t-center">Manager action</div>
              </Button>
            </div>
          </Can>
          <section className="s-top-lrg">
            <h4>passThrough sample</h4>

            <Can I="view" a="ManagerText" passThrough>
              {(allowed: boolean) => (
                <Button
                  type="button"
                  variant="primary-ghost"
                  size="medium"
                  isDisabled={allowed}
                  onClick={() => console.log("submit: ")}
                >
                  <div className="t-center">PassThrough button</div>
                </Button>
              )}
            </Can>
          </section>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Can } from "../modules/authorization";

export function Admin() {
  return (
    <div>
      <div className="container">
        <div className="admin-page">
          <Can I="view" a="AdminText">
            <p>Only Admin can see this</p>
          </Can>
          <Can I="view" a="ManageerText">
            <p>Only Manager can see this</p>
          </Can>
        </div>
      </div>
    </div>
  );
}

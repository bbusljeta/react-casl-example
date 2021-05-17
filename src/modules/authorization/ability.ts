import { AbilityBuilder, Ability } from "@casl/ability";
import { defineRulesForAdmin, defineRulesForManager } from "./roles";

// actions
type Actions = "view" | "trigger";

// subjects
type AdminText = "AdminText";
type ManagerText = "ManagerText";
type SomeAdminAction = "SomeAdminAction";
type Subjects = AdminText | ManagerText | SomeAdminAction;

export const ability = new Ability<[Actions, Subjects]>();
export type AppAbility = Ability<[Actions, Subjects]>;

export default function defineRoleRules(role: string) {
  const abilityBuilder = new AbilityBuilder<AppAbility>(Ability);

  if (role === "Admin") {
    return defineRulesForAdmin(abilityBuilder);
  }

  return defineRulesForManager(abilityBuilder);
}

export function buildAbilityFor(role: string) {
  ability.update(defineRoleRules(role));
}

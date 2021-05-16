import { AbilityBuilder, Ability } from "@casl/ability";
import { defineRulesForAdmin, defineRulesForManager } from "./roles";

// actions
type Actions = "view" | "update" | "create";

// subjects
type AdminText = "AdminText";
type ManageerText = "ManageerText";
type Subjects = AdminText | ManageerText;

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
  console.log("build ability for", role);
  ability.update(defineRoleRules(role));
}

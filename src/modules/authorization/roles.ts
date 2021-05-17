import { AbilityBuilder } from "@casl/ability";
import { AppAbility } from "./ability";

export const defineRulesForAdmin = (
  abilityBuilder: AbilityBuilder<AppAbility>
) => {
  const { can, rules, cannot } = abilityBuilder;

  can("view", "AdminText");
  can("trigger", "SomeAdminAction");
  cannot("view", "ManagerText");

  return rules;
};

export const defineRulesForManager = (
  abilityBuilder: AbilityBuilder<AppAbility>
) => {
  const { can, rules, cannot } = abilityBuilder;

  cannot("view", "AdminText");
  cannot("trigger", "SomeAdminAction");
  can("view", "ManagerText");

  return rules;
};

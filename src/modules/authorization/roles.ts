import { AbilityBuilder } from "@casl/ability";
import { AppAbility } from "./ability";

export const defineRulesForAdmin = (
  abilityBuilder: AbilityBuilder<AppAbility>
) => {
  const { can, rules, cannot } = abilityBuilder;

  can("view", "AdminText");
  cannot("view", "ManageerText");

  return rules;
};

export const defineRulesForManager = (
  abilityBuilder: AbilityBuilder<AppAbility>
) => {
  const { can, rules, cannot } = abilityBuilder;

  cannot("view", "AdminText");
  can("view", "ManageerText");

  return rules;
};

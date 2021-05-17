import * as React from "react";

interface Props {
  type?: "button" | "submit" | "reset";
  variant:
    | "primary"
    | "secondary"
    | "primary-ghost"
    | "secondary-ghost"
    | "warning-ghost";
  size: "large" | "medium" | "small" | "xsmall" | "xxsmall";
  isDisabled: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  to?: string;
}
export const Button: React.FC<Props> = ({
  children,
  isDisabled = false,
  className,
  size,
  type,
  to,
  variant,
  onClick,
}) => {
  const getButtonSize = () => {
    switch (size) {
      case "large":
        return "btn--large";
      case "medium":
        return "btn--medium";
      case "small":
        return "btn--small";
      case "xsmall":
        return "btn--xsmall";
      case "xxsmall":
        return "btn--xxsmall";
      default:
        return;
    }
  };

  const getButtonVariant = () => {
    switch (variant) {
      case "primary":
        return "btn--primary";
      case "secondary":
        return "btn--secondary";
      case "primary-ghost":
        return "btn--primary--ghost";
      case "secondary-ghost":
        return "btn--secondary--ghost";
      case "warning-ghost":
        return "btn--warning--ghost";
      default:
        return;
    }
  };
  return to ? (
    <a
      href={to}
      rel="noreferrer"
      target="_blank"
      className={`btn ${getButtonSize()} ${getButtonVariant()}`}
    >
      {children}
    </a>
  ) : (
    <button
      type={type}
      className={`btn ${getButtonSize()} ${getButtonVariant()} ${
        isDisabled ? "btn--disabled" : ""
      } ${className ?? ""}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

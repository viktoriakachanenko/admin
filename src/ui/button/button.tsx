import React from "react";
import styles from "./button.module.scss";

import clsx from "clsx";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
  size?: "small" | "large";
  startIcon?: React.ReactNode;
};

export const Button = ({
  children,
  size = "large",
  startIcon,
  onClick,
}: Props) => {
  const classes = clsx(
    styles.button,
    size === "small" && styles.small,
    size === "large" && styles.large,
  );
  return (
    <button className={classes} onClick={onClick}>
      {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
      {children}
    </button>
  );
};

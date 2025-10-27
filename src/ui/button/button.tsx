import React from "react";

import clsx from "clsx";
import { Spinner } from "../spinner";

import styles from "./button.module.scss";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
  size?: "small" | "large";
  startIcon?: React.ReactNode;
  loading?: boolean;
};

export const Button = ({
  children,
  size = "large",
  startIcon,
  onClick,
  loading = false,
}: Props) => {
  const classes = clsx(
    styles.button,
    size === "small" && styles.small,
    size === "large" && styles.large,
  );
  return (
    <button className={classes} onClick={onClick}>
      {!loading && startIcon && (
        <span className={styles.startIcon}>{startIcon}</span>
      )}
      {!loading && children}
      {loading && <Spinner theme="secondary" size="small" />}
    </button>
  );
};

import clsx from "clsx";

import styles from "./spinner.module.scss";

type Props = {
  size?: "small" | "medium" | "large";
  theme?: "primary" | "secondary";
};

export const Spinner = ({ size = "large", theme = "primary" }: Props) => {
  const classes = clsx(
    styles.loader,
    size === "small" && styles.small,
    size === "medium" && styles.medium,
    size === "large" && styles.large,
    theme === "primary" && styles.primary,
    theme === "secondary" && styles.secondary,
  );

  return <span className={classes}></span>;
};

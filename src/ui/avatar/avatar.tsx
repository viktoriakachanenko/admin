import styles from "./avatar.module.scss";

type Props = {
  src: string;
  alt: string;
  size?: "small" | "large";
};

export const Avatar = ({ src, alt, size = "small" }: Props) => {
  return (
    <img
      className={`${styles.img} ${size === "small" ? styles.small : styles.large}`}
      src={src}
      alt={alt}
    />
  );
};

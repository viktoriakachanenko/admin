import clsx from 'clsx';

import styles from './avatar.module.scss';

type Props = {
  src: string;
  alt: string;
  size?: 'small' | 'large';
};

export const Avatar = ({ src, alt, size = 'small' }: Props) => {
  const classes = clsx(
    styles.img,
    size === 'small' && styles.small,
    size === 'large' && styles.large,
  );
  return <img className={classes} src={src} alt={alt} />;
};

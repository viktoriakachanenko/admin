import { IconLineCounter } from 'src/ui/icons/icon-line-counter';

import styles from './counter.module.scss';

type Props = {
  people: number;
  departmens: number;
  guests: number;
};

export const Counter = ({ people, departmens, guests }: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.item}>
        <div className={styles.number}>{people}</div>
        <div className={styles.text}>Peoples</div>
      </div>

      <IconLineCounter width={1} height={120} className={styles.line} />

      <div className={styles.item}>
        <div className={styles.number}>{departmens}</div>
        <div className={styles.text}>Departmens</div>
      </div>

      <IconLineCounter width={1} height={120} className={styles.line} />

      <div className={styles.item}>
        <div className={styles.number}>{guests}</div>
        <div className={styles.text}>Guests</div>
      </div>
    </div>
  );
};

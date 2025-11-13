import { Counter } from 'src/components/counter';

import styles from './users.module.scss';

export const Users = () => {
  return (
    <div className={styles.root}>
      <Counter people={12} departmens={5} guests={0} />
    </div>
  );
};

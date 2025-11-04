import { WorkSpaceName } from 'src/components/workSpaceName';

import styles from './home.module.scss';

export const Home = () => {
  return (
    <div className={styles.root}>
      <WorkSpaceName />
    </div>
  );
};

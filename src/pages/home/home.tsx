import { WorkSpaceName } from 'src/components/workSpaceName';
import { WorkSpaceAdmins } from 'src/components/workSpaceAdmins';

import styles from './home.module.scss';

export const Home = () => {
  return (
    <div className={styles.root}>
      <WorkSpaceName />
      <WorkSpaceAdmins />
    </div>
  );
};

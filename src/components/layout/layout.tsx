import { Outlet } from 'react-router-dom';
import { Sidebar } from '../sidebar';

import styles from './layout.module.scss';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
};

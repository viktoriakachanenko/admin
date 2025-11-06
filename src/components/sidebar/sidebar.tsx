import clsx from 'clsx';

import { useLocation } from 'react-router-dom';

import { Avatar } from 'src/ui/avatar';
import { IconHouse } from 'src/ui/icons/icon-house';
import { IconSetting } from 'src/ui/icons/icon-setting';
import { IconUsers } from 'src/ui/icons/icon-users';
import { IconBilling } from 'src/ui/icons/icon-billing';
import { IconSingOut } from 'src/ui/icons/icon-sing-out';

import styles from './sidebar.module.scss';

const list = [
  {
    title: 'General',
    url: '/',
    icon: <IconHouse width={24} height={24} />,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: <IconSetting width={24} height={24} />,
  },
  {
    title: 'Users',
    url: '/users',
    icon: <IconUsers width={24} height={24} />,
  },
  {
    title: 'Billing',
    url: '/billing',
    icon: <IconBilling width={24} height={24} />,
  },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <Avatar
          src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611737.jpg?semt=ais_hybrid&w=740&q=80"
          alt="..."
          size="small"
        />
        <span>Company</span>
      </div>

      <ul className={styles.list}>
        {list.map((item) => (
          <li
            className={clsx(
              styles.item,
              location.pathname === item.url && styles.active,
            )}
            key={item.title}
          >
            <a href={item.url}>
              {item.icon}
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.bottom}>
        <button className={styles.signOut}>
          <IconSingOut width={24} height={24} />
          <span>Sign out</span>
        </button>
      </div>
    </div>
  );
};

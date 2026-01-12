import clsx from 'clsx';

import { useState } from 'react';

import { Avatar } from 'src/ui/avatar';
import { IconHouse } from 'src/ui/icons/icon-house';
import { IconSetting } from 'src/ui/icons/icon-setting';
import { IconUsers } from 'src/ui/icons/icon-users';
import { IconBilling } from 'src/ui/icons/icon-billing';
import { IconSingOut } from 'src/ui/icons/icon-sing-out';
import { IconExpanded } from 'src/ui/icons/icon_expended';

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

const LOCAL_STORAGE_KEY = 'isExpanded';

export const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (saved === null) {
      return true;
    }
    try {
      const result = JSON.parse(saved);
      if (typeof result === 'boolean') {
        return result;
      }
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      return true;
    } catch (error) {
      console.error(error);
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      return true;
    }
  });

  const handleClick = () => {
    const newValue = !isExpanded;
    setIsExpanded(newValue);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newValue));
  };

  return (
    <div className={clsx(styles.sidebar, !isExpanded && styles.exit)}>
      <div className={styles.top}>
        <Avatar
          src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611737.jpg?semt=ais_hybrid&w=740&q=80"
          alt="..."
          size="small"
        />
        <span className={styles.text}>Company</span>
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
              <span className={styles.text}>{item.title}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.bottom}>
        <button className={styles.signOut}>
          <IconSingOut width={24} height={24} />
          <span className={styles.text}>Sing Up</span>
        </button>

        <button onClick={handleClick} className={styles.expanded}>
          <IconExpanded width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

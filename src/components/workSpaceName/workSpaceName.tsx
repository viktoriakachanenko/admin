import { useRef, useState } from 'react';
import { IconFotoAvatar } from '../../ui/icons/icon-foto-avatar';
import { IconPencil } from '../../ui/icons/icon-pencil';

import clsx from 'clsx';

import styles from './workSpaceName.module.scss';

export const WorkSpaceName = () => {
  const refInput = useRef<HTMLInputElement>(null);
  const refFileInput = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState('Workspace name');
  const [editing, setEditing] = useState(false);

  const handleEditingClick = () => {
    setEditing(true);
    setTimeout(() => {
      refInput.current?.focus();
    }, 0);
  };

  const handleClickAvatar = () => {
    refFileInput.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.root}>
      <IconFotoAvatar
        className={styles.icon}
        onClick={handleClickAvatar}
        width={140}
        height={140}
      />

      <input className={styles.hidden} type="file" ref={refFileInput} />

      <div className={styles.block}>
        <input
          ref={refInput}
          className={clsx(styles.input, editing && styles.active)}
          value={value}
          type="text"
          disabled={!editing}
          onChange={handleChange}
        />
        <IconPencil
          className={styles.icon}
          onClick={handleEditingClick}
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};

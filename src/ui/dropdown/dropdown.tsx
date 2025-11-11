import { useEffect, useState } from 'react';
import { IconArrowBottom } from '../icons/icon-arrow-bottom';

import clsx from 'clsx';

import styles from './dropdown.module.scss';

export type DropdownItem = {
  id: number | string;
  value: number | string;
};

type Props = {
  items: DropdownItem[];
  onChange: (item: DropdownItem) => void;
  selectItemId?: DropdownItem['id'];
};

export const Dropdown = ({ items, onChange, selectItemId }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<DropdownItem | null>(null);

  useEffect(() => {
    if (selectItemId) {
      const result = items.find((item) => item.id === selectItemId);
      if (result) {
        setSelected(result);
      }
    }
  }, []);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOnChange = (item: DropdownItem) => {
    onChange(item);
    setSelected(item);
    setIsOpen(false);
  };

  const classes = clsx(styles.icon, isOpen && styles.iconArrowTop);

  return (
    <div className={styles.dropdown}>
      <button className={styles.button} onClick={handleOnClick}>
        {selected ? selected.value : '---'}
        <span className={classes}>
          <IconArrowBottom width={25} height={25} />
        </span>
      </button>

      {isOpen && (
        <ul className={styles.list}>
          {items.map((item) => (
            <li onClick={() => handleOnChange(item)} key={item.id}>
              {item.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

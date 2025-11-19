import { Input } from 'src/ui/input';
import { IconSearch } from 'src/ui/icons/icon-search';
import { Button } from 'src/ui/button';
import { IconUser } from 'src/ui/icons/icon-user';
import { IconDots } from 'src/ui/icons/icon_dots';
import { Dropdown, type DropdownItem } from 'src/ui/dropdown';
import { useState } from 'react';
import { IconUserList } from 'src/ui/icons/icon_user_list';

import styles from './filtres.module.scss';

const item: DropdownItem[] = [
  { id: 1, value: '1' },
  { id: 2, value: '2' },
  { id: 3, value: '3' },
];

export const Filters = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [firstValue, setFirstValue] = useState<DropdownItem | null>(null);
  const [secondValue, setSecondValue] = useState<DropdownItem | null>(null);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.root}>
      <div className={styles.partOne}>
        <Input
          value=""
          onChange={() => {}}
          type="text"
          placeholder="Search"
          icon={<IconSearch width={24} height={24} />}
        />
        <div className={styles.btnUser}>
          <Button
            size="large"
            loading={false}
            onClick={() => {}}
            startIcon={<IconUser width={16} height={16} />}
          >
            <span className={styles.btnText}>Invitive</span>
          </Button>
        </div>

        <button className={styles.btnIconDots} onClick={handleMenuOpen}>
          <IconDots className={styles.iconDots} width={24} height={24} />
          {menuOpen && (
            <div className={styles.menu}>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>1</li>
                <li className={styles.menuItem}>2</li>
                <li className={styles.menuItem}>3</li>
              </ul>
            </div>
          )}
        </button>
      </div>

      <div className={styles.partTwo}>
        <div className={styles.dropdownWrapper}>
          <Dropdown
            items={item}
            onChange={setFirstValue}
            selectItemId={firstValue?.id}
          >
            {firstValue ? firstValue.value : 'All'}
          </Dropdown>

          <Dropdown
            items={item}
            onChange={setSecondValue}
            selectItemId={secondValue?.id}
          >
            {secondValue ? secondValue.value : 'All Departments'}
          </Dropdown>
        </div>
        <button className={styles.btnIconUser}>
          <IconUserList width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

import { useState } from 'react';

import { Dropdown, type DropdownItem } from 'src/ui/dropdown';
import { Toggle } from 'src/ui/toggle';
import { Button } from 'src/ui/button';

import styles from './settings.module.scss';

export const Settings = () => {
  const weekDays: DropdownItem[] = [
    { id: 1, value: 'Monday' },
    { id: 2, value: 'Tuesday' },
    { id: 3, value: 'Wednesday' },
    { id: 4, value: 'Thursday' },
    { id: 5, value: 'Friday' },
    { id: 6, value: 'Saturday' },
    { id: 7, value: 'Sunday' },
  ];

  const [selectedDay, setSelectedDay] = useState<DropdownItem['id']>(
    weekDays[0].id,
  );

  const [isChecked, setIsChecked] = useState(false);

  const handleSelectDay = (item: DropdownItem) => {
    setSelectedDay(item.id);
  };

  const handleToggleChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSave = () => {
    console.log('Settings saved');
  };

  return (
    <div className={styles.root}>
      <h2>Settings</h2>
      <div className={styles.settings}>
        <div className={styles.settingItem}>
          <span>Week start</span>
          <Dropdown
            items={weekDays}
            onChange={handleSelectDay}
            selectItemId={selectedDay}
          />
        </div>
        <div className={styles.settingItem}>
          <span>Notification</span>
          <Toggle onChange={handleToggleChange} isChecked={isChecked} />
        </div>
      </div>
      <div className={styles.buttonSave}>
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  );
};

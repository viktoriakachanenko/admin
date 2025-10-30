import { useState } from 'react';
import styles from './toggle.module.scss';

type Props = {
  checked: boolean;
  onChange: (value: boolean) => void;
};

export const Toggle = ({ onChange, checked }: Props) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };
  return (
    <label className={styles.switch}>
      <input onChange={handleOnChange} checked={isChecked} type="checkbox" />
      <span className={styles.slider}></span>
    </label>
  );
};

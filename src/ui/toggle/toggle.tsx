import styles from './toggle.module.scss';

type Props = {
  isChecked: boolean;
  onChange: () => void;
};

export const Toggle = ({ onChange, isChecked }: Props) => {
  const handleOnChange = () => {
    onChange();
  };

  return (
    <label className={styles.switch}>
      <input onChange={handleOnChange} checked={isChecked} type="checkbox" />
      <span className={styles.slider}></span>
    </label>
  );
};

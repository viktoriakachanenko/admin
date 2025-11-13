import styles from './input.module.scss';

type Props = {
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'email';
  placeholder: string;
  icon?: React.ReactNode;
};

export const Input = ({
  value,
  onChange,
  type = 'text',
  placeholder,
  icon,
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
        {icon && <span className={styles.icon}>{icon}</span>}
      </div>
    </div>
  );
};

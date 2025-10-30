import { Avatar } from 'src/ui/avatar';
import { Button } from 'src/ui/button';
import { IconUser } from 'src/ui/icons/icon-user';
import { Spinner } from 'src/ui/spinner';
import { Toggle } from 'src/ui/toggle';
import { Dropdown } from 'src/ui/dropdown';

import styles from './home.module.scss';

export const Home = () => {
  const items = [
    { id: 1, value: 'Monday' },
    { id: 2, value: 'Tuesday' },
  ];

  return (
    <div className={styles.root}>
      <Avatar
        src="https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70.jpg"
        alt="avatar"
      />
      <Avatar
        src="https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70.jpg"
        alt="avatar"
        size="large"
      />
      <Button
        size="small"
        startIcon={<IconUser />}
        onClick={() => {}}
        loading={true}
      >
        Save
      </Button>
      <br />
      <Spinner size="small" />
      <br />
      <Toggle onChange={(value) => console.log(value)} checked={false} />
      <br />
      <br />
      <Dropdown
        selectItemId={2}
        items={items}
        onChange={(item) => console.log(item)}
      />
    </div>
  );
};

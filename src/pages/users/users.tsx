import { Counter } from 'src/components/counter';

import { Input } from 'src/ui/input';
import { IconSearch } from 'src/ui/icons/icon-search';

import styles from './users.module.scss';

export const Users = () => {
  return (
    <div className={styles.root}>
      <Counter people={12} departmens={5} guests={0} />
      <Input
        value=""
        onChange={() => {}}
        type="text"
        placeholder="Search"
        icon={<IconSearch />}
      />
    </div>
  );
};

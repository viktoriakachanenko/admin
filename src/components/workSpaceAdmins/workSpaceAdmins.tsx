import { IconDelete } from 'src/ui/icons/icon-delete';
import { IconPlus } from 'src/ui/icons/icon-plus';
import { useState } from 'react';

import styles from './workSpaceAdmins.module.scss';

type Props = {
  id: number;
  name: string;
  role: string;
  src: string;
};

const adminList: Props[] = [
  {
    id: 1,
    name: 'John Johnson',
    role: 'CEO',
    src: 'https://img.freepik.com/premium-photo/handsome-emotional-man-isolated-gray-background_2221-2064.jpg?semt=ais_hybrid&w=740&q=80',
  },
  {
    id: 2,
    name: 'Jane Cooper',
    role: 'Design Lead',
    src: 'https://img.freepik.com/premium-photo/good-skincare-never-takes-vacation-studio-portrait-beautiful-young-woman-posing-against-grey-background_590464-49953.jpg?w=360',
  },
];

export const WorkSpaceAdmins = () => {
  const [admins, setAdmins] = useState<Props[]>(adminList);

  const handleDelete = (id: number) => {
    setAdmins((prev) => prev.filter((admin) => admin.id !== id));
  };
  return (
    <div className={styles.root}>
      <h2>WorkSpace admins</h2>

      <div className={styles.list}>
        {admins.map((admin) => (
          <div className={styles.card} key={admin.id}>
            <button
              className={styles.iconDelete}
              onClick={() => handleDelete(admin.id)}
            >
              <IconDelete width={10} height={10} />
            </button>
            <img src={admin.src} alt="..." />
            <p>{admin.name}</p>
            <p className={styles.role}>{admin.role}</p>
          </div>
        ))}

        <button className={styles.addAdmin}>
          <span>
            <IconPlus width={32} height={32} />
            <p>Add admin</p>
          </span>
        </button>
      </div>
    </div>
  );
};

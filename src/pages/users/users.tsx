import { createColumnHelper, type ColumnDef } from '@tanstack/react-table';
import { Counter } from 'src/components/counter';
import { Filters } from 'src/components/filters';
import { Table } from 'src/components/table';

import styles from './users.module.scss';

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  created_at: string;
  avatar: string;
};

const users: User[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    role: 'admin',
    created_at: '2025-01-12T10:15:00Z',
    avatar:
      'https://polinka.top/uploads/posts/2023-05/1684269707_polinka-top-p-krasivie-kartinki-avatarki-dlya-vatsapa-in-1.jpg',
  },
  {
    id: 2,
    name: 'Mark Stevens',
    email: 'mark@example.com',
    role: 'moderator',
    created_at: '2025-02-03T08:44:20Z',
    avatar:
      'https://kartinki.pics/pics/uploads/posts/2022-09/1662642122_5-kartinkin-net-p-risunok-na-avatarku-dlya-muzhchin-instagra-5.jpg',
  },
  {
    id: 3,
    name: 'Julia Kim',
    email: 'julia@example.com',
    role: 'user',
    created_at: '2025-03-10T17:22:11Z',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlZ9_z7WGOH1rxGIc0Mc8Dud059pbpKEnX7A&s',
  },
  {
    id: 4,
    name: 'David Smith',
    email: 'david@example.com',
    role: 'user',
    created_at: '2025-04-01T12:05:45Z',
    avatar:
      'https://img.freepik.com/premium-vector/beard-man-avatar_96853-399.jpg',
  },
];

export const Users = () => {
  const columnHelper = createColumnHelper<User>();

  const columns = [
    columnHelper.accessor('name', {
      header: 'Ім’я',
      cell: (info) => (
        <div className={styles.userAvatar}>
          <img
            className={styles.avatar}
            src={info.row.original.avatar}
            alt={info.getValue()}
            width={43}
            height={43}
          />
          <span>{info.getValue()}</span>
        </div>
      ),
    }),

    columnHelper.accessor('email', {
      header: 'Email',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('role', {
      header: 'Role',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('created_at', {
      header: 'Created at',
      cell: (info) => info.getValue(),
    }),
  ] as ColumnDef<User>[];

  return (
    <>
      <Counter people={12} departmens={5} guests={0} />
      <Filters />
      <Table columns={columns} data={users} />
    </>
  );
};

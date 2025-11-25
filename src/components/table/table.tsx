import styles from './table.module.scss';

export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  created_at: string;
  avatar: string;
};

export type Column = {
  title: string;
  field: string;
};

type Props = {
  data: User[];
  columns: Column[];
};

export const columns: Column[] = [
  { title: 'User', field: 'user' },
  { title: 'Email', field: 'email' },
  { title: 'Role', field: 'role' },
  { title: 'Created_at', field: 'created_at' },
];

export const users: User[] = [
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

export const Table = ({ data, columns }: Props) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.title}>{column.title}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((user) => (
          <tr key={user.id}>
            {columns.map((column) => {
              if (column.field === 'user') {
                return (
                  <td className={styles.userAvatar} key={column.field}>
                    <input className={styles.checkbox} type="checkbox" />
                    <img
                      className={styles.avatar}
                      src={user.avatar}
                      width={44}
                      height={44}
                    />
                    <span>{user.name}</span>
                  </td>
                );
              }
              return (
                <td key={column.field}>{user[column.field as keyof User]}</td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

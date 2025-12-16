import { createColumnHelper, type ColumnDef } from '@tanstack/react-table';
import { Counter } from 'src/components/counter';
import { Filters } from 'src/components/filters';
import { Table } from 'src/components/table';
import { useEffect, useState } from 'react';
import { Spinner } from 'src/ui/spinner';
import { LineChart } from 'src/components/lineChart/lineChart';

type Coment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export const Users = () => {
  const [coment, setComent] = useState<Coment[]>([]);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  const columnHelper = createColumnHelper<Coment>();

  const columns = [
    columnHelper.accessor('postId', {
      header: 'postId',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('id', {
      header: 'id',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('name', {
      header: 'Name',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('email', {
      header: 'Email',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('body', {
      header: 'Body',
      cell: (info) => info.getValue(),
    }),
  ] as ColumnDef<Coment>[];

  useEffect(() => {
    const init = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/comments',
        );
        const data = (await response.json()) as Coment[];
        setComent(data);
      } catch (error) {
        setError(true);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  return (
    <>
      <Counter people={12} departmens={5} guests={0} />
      <Filters />

      <LineChart />

      {loading && <Spinner />}
      {error && <h1>Error</h1>}
      {!loading && !error && <Table columns={columns} data={coment} />}
    </>
  );
};

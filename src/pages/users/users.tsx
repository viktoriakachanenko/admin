import { Counter } from 'src/components/counter';
import { Filters } from 'src/components/filters';
import { Table } from 'src/components/table';
import { columns, users } from 'src/components/table/table';

export const Users = () => {
  return (
    <>
      <Counter people={12} departmens={5} guests={0} />
      <Filters />
      <Table data={users} columns={columns} />
    </>
  );
};

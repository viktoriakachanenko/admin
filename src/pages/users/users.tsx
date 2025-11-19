import { Counter } from 'src/components/counter';
import { Filters } from 'src/components/filters';

export const Users = () => {
  return (
    <>
      <Counter people={12} departmens={5} guests={0} />
      <Filters />
    </>
  );
};

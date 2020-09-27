import { User } from '@models/users';

interface Props {
  data: User;
}

const ListItem = ({ data }: Props) => (
  <span>
    {data.id}:{data.name}
  </span>
);

export default ListItem;

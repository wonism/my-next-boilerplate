import { useRecoilValueLoadable } from 'recoil';
import { userQuery } from '@store/users';

import ListItem from './ListItem';

const List = () => {
  const user = useRecoilValueLoadable(userQuery);

  switch (user.state) {
    case 'hasValue':
      return (
        <ul>
          {user.contents.map((item) => (
            <li key={item.id}>
              <ListItem data={item} />
            </li>
          ))}
        </ul>
      );
    case 'hasError':
      return <p>{user.contents.message}</p>;
    case 'loading':
    default:
      return <p>Loading...</p>;
  }
};

export default List;

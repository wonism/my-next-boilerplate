import Link from 'next/link';

import Layout from '@components/Layout';
import List from './components/List';

const Users = () => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Users List</h1>
    <p>You are currently on: /users</p>
    <List />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default Users;

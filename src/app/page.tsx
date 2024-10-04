import {
  aggregatePosts,
  getPosts,
  groupPosts,
  paginatePosts,
  sortPosts,
} from '@/_actions/posts';
import { getUsers } from '@/_actions/users';
import CreateUser from '@/components/create-user';
import Image from 'next/image';

export default async function Home() {
  const [posts, users, totalLikes, group, sort, pagination] = await Promise.all(
    [
      getPosts(),
      getUsers(),
      aggregatePosts(),
      groupPosts(),
      sortPosts(),
      paginatePosts(),
    ]
  );
  // console.log(posts)
  // console.log(pagination);

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <CreateUser />
    </div>
  );
}

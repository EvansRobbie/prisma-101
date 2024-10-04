'use client';
import { insertPost } from '@/_actions/posts';
import { createManyTransaction } from '@/_actions/transactions';
import { createManyUser, insertUser } from '@/_actions/users';

const CreateUser = () => {
  const handleClick = async () => {
    const res = await createManyUser();
    console.log(res);
  };

  const handlePost = async () => {
    const res = await insertPost();
    console.log(res);
  };
  const handleTransaction = async () => {
    const res = await createManyTransaction();
    console.log(res);
  };
  return (
    <div>
      <button
        className='bg-red-500 px-4 py-2 rounded-md'
        onClick={() => handleClick()}
      >
        CreateUser
      </button>
      <button
        className='bg-red-500 px-4 py-2 rounded-md'
        onClick={() => handlePost()}
      >
        createPost
      </button>
      <button
        className='bg-red-500 px-4 py-2 rounded-md'
        onClick={() => handleTransaction()}
      >
        Transaction
      </button>
    </div>
  );
};

export default CreateUser;

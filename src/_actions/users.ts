'use server';

import prisma from '@/lib/prisma';

export const getUsers = async () => {
  try {
    // const res = await prisma.user.findMany({
    //   where:{
    //     // name: {
    //     //   startsWith:"s",
    //     //   contains:"a"
    //     // }
    //   //  id:{
    //   //     // in:[1,2]
    //   //     // notIn:[1,2]
    //   //     not:{
    //   //        // in:[1,2]
    //   //       gt:3
    //   //     }
    //   //   }
    //   OR:[
    //     {
    //       id:{
    //         gt:3
    //       }
    //     },
    //     {
    //       name:{
    //         contains:"s"
    //       }
    //     }
    //   ]
    //   },
    //   orderBy:{
    //     name:"asc"
    //   }
    // });

    // relational filters

    const users = await prisma.user.findMany({
      where: {
        posts: {
          //all => every
          //any => some
          none: {
            published: false,
          },
        },
      },
    });

    return users;
  } catch (error) {
    throw error;
  }
};

// insert user
export const insertUser = async () => {
  try {
    const user = await prisma.user.create({
      data: {
        name: 'Robbie2',
        email: 'robbie2@prismadb.com',
        role: 'ADMIN',
        posts: {
          // create post and user at the same time
          create: [
            {
              title: 'Hello Prisma',
              categories: {
                connect: [
                  {
                    id: 1,
                  },
                  {
                    id: 2,
                  },
                ],
              },
            },
          ],
        },
      },
    });
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const createManyUser = async () => {
  try {
    const user = await prisma.user.createMany({
      data: [
        {
          name: 'RobbieMany1',
          email: 'robbiemany@prismadb.com',
          role: 'ADMIN',
        },
        {
          name: 'Robbie3',
          email: 'robbie3@prismadb.com',
          role: 'ADMIN',
        },
        
      ],
      skipDuplicates: true, // skip duplicate if unique data is set to true
    });
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
  }
};

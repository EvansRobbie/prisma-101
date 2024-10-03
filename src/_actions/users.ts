'use server';

import prisma from '@/lib/prisma';

export const getUsers = async () => {
  try {
    const res = await prisma.user.findMany({
      where:{
        // name: {
        //   startsWith:"s",
        //   contains:"a"
        // }
      //  id:{
      //     // in:[1,2]
      //     // notIn:[1,2]
      //     not:{
      //        // in:[1,2]
      //       gt:3
      //     }
      //   }
      OR:[
        {
          id:{
            gt:3
          }
        },
        {
          name:{
            contains:"s"
          }
        }
      ]
      },
      orderBy:{
        name:"asc"
      }
    });
    return res;
  } catch (error) {
    throw error;
  }
};
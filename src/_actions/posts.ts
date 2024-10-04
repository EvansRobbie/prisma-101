'use server';

import prisma from '@/lib/prisma';

export const getPosts = async () => {
  try {
    // const res = await prisma.post.findMany({
    //   where:{
    //     OR:[
    //       {
    //         title:{
    //           contains:"github",
    //           mode:"insensitive" // postgresql & mongodb
    //         }
    //       },{
    //         title:{
    //           contains:"Twitter"
    //         }
    //       }
    //     ],
    //     AND:{
    //       published:true
    //     }
    //   }
    // });

    //relation filters

    const res = await prisma.post.findMany({
      where:{
        author:{
          isNot:{
            name: "Jack"
          },
          is:{
            email:{
              startsWith:"s"
            }
          }
        },
        

      },
      include:{
        author:true
      }
    })
    return res;
  } catch (error) {
    throw error;
  }
};

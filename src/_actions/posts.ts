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
      where: {
        author: {
          isNot: {
            name: 'Jack',
          },
          is: {
            email: {
              startsWith: 's',
            },
          },
        },
      },
      // select specific fields
      select: {
        title: true,
        author: {
          select: {
            name: true,
          },
        },
      },

      // include:{
      //   author:true
      // }
    });
    return res;
  } catch (error) {
    throw error;
  }
};

// aggregate
export const aggregatePosts = async () => {
  try {
    const res = await prisma.post.aggregate({
      _sum: {
        likeNum: true,
      },
      _avg: {
        likeNum: true,
      },
      _count: {
        id: true,
      },
      _max: {
        likeNum: true,
      },
      _min: {
        likeNum: true,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

// Group

export const groupPosts = async () => {
  try {
    const res = await prisma.post.groupBy({
      by: ['authorId'],
      _count: true,
      _sum: {
        likeNum: true,
      },
      _avg: {
        likeNum: true,
      },
      _max: {
        likeNum: true,
      },
      _min: {
        likeNum: true,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

// sorting

export const sortPosts = async () => {
  try {
    const res = await prisma.post.findMany({
      orderBy: {
        likeNum: 'asc',
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

//paginate
// offset pagination
// export const paginatePosts = async () => {

//   const page = 1;
//   const pageSize = 4;

//   try {
//     const res = await prisma.post.findMany({
//       skip: 8,  // offset - how many records you want to skip   PAGE NUMBER page*pageSize starts from 0
//       take: 4, // limit how many records you want to get  PAGE SIZE
//       include: {
//         author: true,
//       }
//     });
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// };


//  cursor pagination
export const paginatePosts = async () => {

  // const cursor = 1;
  // const pageSize = 4;

  try {
    const res = await prisma.post.findMany({
        cursor:{
          id:8,
        }, // offset - how many records you want to skip   PAGE NUMBER cursor starts from 1 - starting point
        take: 4, // limit how many records you want to get  PAGE SIZE
      include: {
        author: true,
      }
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

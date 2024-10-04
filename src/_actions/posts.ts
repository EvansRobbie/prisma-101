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
      // select specific fields
      select:{
        title:true,
        author:{
          select:{
            name:true
          }
        }
      },
     
      // include:{
      //   author:true
      // }
    })
    return res;
  } catch (error) {
    throw error;
  }
};


// aggregate
export const aggregatePosts = async () => {
  try {
    const res = await prisma.post.aggregate({
      _sum:{
        likeNum:true
      },
      _avg:{
        likeNum:true
      },
      _count:{
        id:true
      },
      _max:{
        likeNum:true
      },
      _min:{
        likeNum:true
      }
    })
      return res;
  } catch (error) {
      console.log(error)
  }
}

// Group

export const groupPosts = async () => {
  try {
    const res = await prisma.post.groupBy({
      by:["authorId"],
      _count:true,
      _sum:{
        likeNum:true
      },
      _avg:{
        likeNum:true
      },
      _max:{
        likeNum:true
      },
      _min:{
        likeNum:true
      },
     
    })
      return res;
  } catch (error) {
      console.log(error)
  }
}

// sorting

export const sortPosts = async () => {
  try {
    const res = await prisma.post.findMany({
      orderBy:{
        likeNum:"asc"
      }
    })
      return res;
  } catch (error) {
      console.log(error)
  }
}

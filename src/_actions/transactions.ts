// this  set of multiple crud operations that mus be done as asingle operation if one fails non excetes
'use server';
import prisma from '@/lib/prisma';

export const createManyTransaction = async () => {
  try {
    const withdrawUpdate = prisma.post.update({
      where: {
        id: 1,
      },
      data: {
        likeNum: {
          decrement: 5,
        },
      },
    });
    const depositUpdate = prisma.post.update({
      where: {
        id: 2,
      },
      data: {
        likeNum: {
          increment: 5,
        },
      },
    });

    const res = await prisma.$transaction([withdrawUpdate, depositUpdate]);
    return res;
  } catch (error) {
    console.log(error);
  }
};

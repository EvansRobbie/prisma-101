'use server';

import prisma from '@/lib/prisma';

export const getPosts = async () => {
  try {
    const res = await prisma.post.findMany();
    return res;
  } catch (error) {
    throw error;
  }
};

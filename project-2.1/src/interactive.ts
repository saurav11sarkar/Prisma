import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const interactive = async () => {
  const result = await prisma.$transaction(async (tx) => {
    // query 1
    const getAllPost = await tx.post.findMany({
      where: {
        published: true,
      },
    });

    // query 2
    const countUser = await tx.user.aggregate({
      where: {
        age: {
          equals: 0,
        },
      },
      _count: {
        age: true,
      },
    });

    // query 3

    const updateUser = await tx.user.updateMany({
      where: {
        age: 42,
      },
      data: {
        age: {
          increment: 1,
        },
      },
    });

    return { getAllPost, countUser, updateUser };
  });
  console.log(result);
};

interactive();

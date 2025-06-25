import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationQuerys = async () => {
  const result = await prisma.user
    .findUnique({
      where: {
        id: 1,
      },
    })
    .Post();

  // filter
  const publieshPosts = await prisma.user.findMany({
    include: {
      Post: {
        where: {
          published: true,
        },
      },
    },
  });

  console.dir(publieshPosts, { depth: Infinity });
};

relationQuerys();

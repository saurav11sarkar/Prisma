import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  // find all
  const getAllDB = await prisma.post.findMany({
    select: {
      authorName: true,
    },
  });

  //   find first and find first or throw
  // const findFirst = await prisma.post.findFirstOrThrow({
  //   where: {
  //     published: false,
  //   },
  // });

  // const findUnique = await prisma.post.findUniqueOrThrow({
  //   where: {
  //     id: 20,
  //   },
  //   select: {
  //     title: true,
  //     content: true,
  //     authorName: true,
  //   },
  // });

  console.log({ getAllDB });
};

main();

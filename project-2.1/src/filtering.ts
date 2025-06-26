import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });
  //   console.log(andFiltering);

  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });
  //   console.log(orFiltering);

  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "This",
          },
        },
      ],
    },
  });
  //   console.log(notFiltering);

  const startWithFilter = await prisma.post.findMany({
    where: {
      title: {
        equals: "That is 5", //startWith , endWith
      },
    },
  });
  //   console.log(startWithFilter);

  const userArray = ["user1", "user2", "user3", "user4"];
  const inFilter = await prisma.user.findMany({
    where: {
      username: {
        in: userArray,
      },
    },
  });
  //   console.log(inFilter);

  const inDepthData = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      Post: {
        include: {
          PostCategory: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  });

  console.dir(inDepthData, { depth: Infinity });
}

main();

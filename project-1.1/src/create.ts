import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  // const createMany = await prisma.post.createMany({
  //   data: [
  //     {
  //       title: "Post 1",
  //       content: "Content 1",
  //       authorName: "Author 1",
  //     },
  //     {
  //       title: "Post 2",
  //       content: "Content 2",
  //       authorName: "Author 2",
  //     },
  //     {
  //       title: "Post 3",
  //       content: "Content 3",
  //       authorName: "Author 3",
  //     },
  //   ],
  // });
  // console.log(createMany);

  for (let i = 1; i <= 20; i++) {
    await prisma.post.create({
      data: {
        title: `Post ${i}`,
        content: `Content ${i}`,
        authorName: `Author ${i}`,
      },
    });
  }
};

main();

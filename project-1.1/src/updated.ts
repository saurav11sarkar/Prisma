import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const updated = async () => {
  //   const singleUpdated = await prisma.post.update({
  //     where: {
  //       id: 15,
  //     },
  //     data: {
  //       title: "updated title 7",
  //       content: "updated content",
  //       published: true,
  //       authorName: "updated author name",
  //     },
  //   });
  //   console.log(singleUpdated)

  // const updatedMany = await prisma.post.updateMany({
  //   where: {
  //     title: "updated title 1",
  //   },
  //   data: {
  //     published: true,
  //   },
  // });
  // console.log(updatedMany);

  const upsateData = await prisma.post.upsert({
    where: {
      id: 21
    },
    update: {
      title: "update post 2",
      content: "update post 2 content",
      authorName:"update author 2"
    },
    create: {
      title: "create post 1",
      content: "create post 1 content",
    },
  });
  console.log(upsateData);
};

updated();

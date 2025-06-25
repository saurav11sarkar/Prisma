import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
    const result = await prisma.post.create({
      data: {
        title: "My first post2",
        content: "Hello world 2",
        authorName: "saurav sarkar",
      },
    });
//   const getAllData = await prisma.post.findMany();
//   console.log(result);
};

main();

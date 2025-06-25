import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const deletedData = async () => {
  //   const singleDeleted = await prisma.post.delete({
  //     where: {
  //       id: 1,
  //     },
  //   });
  //   console.log(singleDeleted);
  
  const deletedMany = await prisma.post.deleteMany({
    where: {
      published: true,
    },
  });
  console.log(deletedMany);
};

deletedData();

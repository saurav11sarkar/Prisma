import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rawQuery = async () => {
  //   const post =
  //     await prisma.$queryRaw`select * from "posts" where published = true`;
  //   console.log(post);

  //   deleted user data
  await prisma.$queryRaw`truncate table "users" CASCADE`;
  await prisma.$queryRaw`truncate table "categories" CASCADE`;
};

rawQuery();

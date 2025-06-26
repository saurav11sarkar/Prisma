import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", (e) => {
  console.log(e);
});

const loging = async () => {
  const getAllPost = await prisma.post.findMany({});
  //   console.log(getAllPost);
};

loging();

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const groupBy = async () => {
  const groupPost = await prisma.post.groupBy({
    by: ["published","authorId"],
    _count: {
      published: true,
    },
    having:{
        authorId:{
            gte: 1
        }
    }
  });
  console.log(groupPost);
};

groupBy();

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggragation = async () => {
  const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });

  const sumAge = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });

  const countAge = await prisma.user.aggregate({
    _count: {
      username: true,
    },
  });
  const countData = await prisma.user.count();

  const maxAge = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });

  const postAggration = await prisma.post.aggregate({
    _count:{
      title:true
    },
    where:{
      published:true
    }
  })

  console.log(postAggration);
};

aggragation();

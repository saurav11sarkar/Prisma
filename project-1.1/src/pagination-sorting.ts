import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const paginationSorting = async () => {
  //   offset pagination
  const offsetData = await prisma.post.findMany({
    skip: 5,
    take: 2,
    select: {
      id: true,
      title: true,
    },
  });
  //   console.log(offsetData);
  const costurPagination = await prisma.post.findMany({
    skip: 5,
    take: 2,
    cursor: {
      id: 25,
    },
  });
  //   console.log(costurPagination);

  //   sorting
  const sortingData = await prisma.post.findMany({
    orderBy:{
      id: "desc",
    },
    skip:10,
    take:5,
    where:{
        published:false
    },
    select: {
      id: true,
      title: true,
    }
  });

  console.log(sortingData)
};

paginationSorting();

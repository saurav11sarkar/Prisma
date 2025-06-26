import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransaction = async () => {
  const createData = prisma.user.create({
    data: {
      username: "user 4",
      email: "user4@gmail.com",
    },
  });

  const updateData = prisma.user.update({
    where: {
      id: 11,
    },
    data: {
      age: 24,
    },
  });

  const [userData, userupdatedData] = await prisma.$transaction([
    createData,
    updateData,
  ]);

  console.log(userData, userupdatedData);
};

batchTransaction();

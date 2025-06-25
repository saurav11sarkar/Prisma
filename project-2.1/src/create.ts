import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

async function create() {
  //   const createUser = await prisma.user.create({
  //     data: {
  //       username: "user2",
  //       email: "user2@gmail.com",
  //       role: Role.user,
  //     },
  //   });

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "This is bio",
  //     userId: 1,
  //   },
  // });

  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "programming",
  //   },
  // });

  const createPost = await prisma.post.create({
    data: {
      title: "This is title 5",
      content: "This is content of the post 5.",
      authorId: 1,
      PostCategory: {
        create: [{ categoryId: 1 }, { categoryId: 3 }, { categoryId: 4 }],
      },
    },
    include: {
      PostCategory: true,
    },
  });

  console.log(createPost);
}

create();

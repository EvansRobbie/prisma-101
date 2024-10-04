import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

async function seedCategories() {
  const categories = [
    { name: "Data Base" },
    { name: "Big Data" },
    { name: "Ask a question about Prisma" },
    { name: "Prisma on YouTube" }
  ];

  for (const category of categories) {
    await prisma.category.create({ data: category });
  }
}

const userData: Prisma.UserCreateInput[] = [
  {
    name: "John",
    email: "John@prisma.io",
    posts: {
      create: [
        {
          title: "Join the Prisma Slack",
          published: true,
          // likeNum: 10,
          categories: {
            create: [
              {
                name: "Data Base",
              },
              {
                name: "Big Data",
              },
            ],
          },
        },
        {
          title: "Follow Prisma on Twitter",
          categories: {
            connect: [
              {
                id: 1,
              },
            ],
          },
          published: true,
        },
      ],
    },
  },
  {
    name: "Jack",
    email: "jack@prisma.io",
    posts: {
      create: [
        {
          title: "Follow Prisma on Twitter",
          categories: {
            connect: [
              {
                id: 3,
              },
            ],
          },
          published: true,
        },
        {
          title: "Follow Prisma on Twitter",
          categories: {
            connect: [
              {
                id: 2,
              },
            ],
          },
          published: true,
        },
        {
          title: "Follow Prisma on Twitter",
          categories: {
            connect: [
              {
                id: 1,
              },
            ],
          },
          published: true,
        },
      ],
    },
  },
  {
    name: "Sara",
    email: "sara@prisma.io",
    posts: {
      create: [
        {
          title: "Ask a question about Prisma on GitHub",

          published: true,
          categories: {
            connect: [
              {
                id: 4,
              },
            ],
          },
        },
        {
          title: "Ask a question about Prisma on GitHub",

          published: true,
          categories: {
            connect: [
              {
                id: 3,
              },
            ],
          },
        },
        {
          title: "Ask a question about Prisma on GitHub",

          published: true,
          categories: {
            connect: [
              {
                id: 2,
              },
            ],
          },
        },
        {
          title: "Prisma on YouTube",
          categories: {
            connect: [
              {
                id: 1,
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: "Smith",
    email: "smith@prisma.io",
    posts: {
      create: [
        {
          title: "Ask a question about Prisma on GitHub",

          published: true,
          categories: {
            connect: [
              {
                id: 4,
              },
            ],
          },
        },
        {
          title: "Ask a question about Prisma on GitHub",

          published: true,
          categories: {
            connect: [
              {
                id: 3,
              },
            ],
          },
        },
        {
          title: "Ask a question about Prisma on GitHub",

          published: true,
          categories: {
            connect: [
              {
                id: 2,
              },
            ],
          },
        },
        {
          title: "Prisma on YouTube",
          categories: {
            connect: [
              {
                id: 1,
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: "Mary",
    email: "mary@prisma.io",
    posts: {
      create: [
        {
          title: "Ask a question about Prisma on GitHub",

          published: true,
          categories: {
            connect: [
              {
                id: 4,
              },
            ],
          },
        },
        {
          title: "Ask a question about Prisma on GitHub",

          published: true,
          categories: {
            connect: [
              {
                id: 3,
              },
            ],
          },
        },
        {
          title: "Ask a question about Prisma on GitHub",

          published: true,
          categories: {
            connect: [
              {
                id: 2,
              },
            ],
          },
        },
        {
          title: "Prisma on YouTube",
          categories: {
            connect: [
              {
                id: 1,
              },
            ],
          },
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding categories...`);
  await seedCategories();
  console.log(`Categories seeded.`);

  console.log(`Start seeding users...`);
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}


main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
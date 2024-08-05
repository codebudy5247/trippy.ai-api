import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const users = [
  {
    email: 'sabin@adams.com',
    name: 'Sabin Adams',
    password: 'password-sabin',
  },
  {
    email: 'alex@ruheni.com',
    name: 'Alex Ruheni',
    password: 'password-alex',
  },
];

const trips = [
  {
    title: 'Goa trip',
  },
  {
    title: 'Lasvegas trip',
  },
];

async function main() {
  // const createUsers = prisma.user.createMany({
  //   data: users,
  // });
  // await prisma.$transaction([createUsers]);
  for (const t of trips) {
    await prisma.trip.create({
      data: {
        title:t.title,
        createdById:"5053323c-e11a-4d37-aa1b-140cf72d2d6f"
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

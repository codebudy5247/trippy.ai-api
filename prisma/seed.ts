import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const trips = [
  {
    title: 'Goa trip',
  },
  {
    title: 'Lasvegas trip',
  },
];

async function main() {
  for (const t of trips) {
    await prisma.trip.create({
      data: t,
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

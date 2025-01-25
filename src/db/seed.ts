import prisma from "@/db/prisma";
import initData from "@/db/seedData";
import { sequential } from "@/lib/functions";

async function main() {
  // const promises = initData.map((data) => {
  //   return async () => {
  //     const result = await prisma.book.create({
  //       data,
  //       include: {
  //         bookAuthors: {
  //           include: {
  //             author: true,
  //           },
  //         },
  //         review: true,
  //       },
  //     });
  //     return result;
  //   };
  // });
  // const results = await sequential(promises);
  // console.dir(results, { depth: null });
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

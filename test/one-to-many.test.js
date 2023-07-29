import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("it should can insert and include", async () => {
    const comment = await prismaClient.comment.create({
      data: {
        customer_id: "eko",
        title: "Insert Comment",
        description: "Description Comment",
      },
      include: {
        customer: true,
      },
    });

    console.info(comment);
  });

  it("should can insert and many relation", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "alex",
        name: "Alex",
        email: "alex@pzn.com",
        phone: "03924238742",
        comments: {
          createMany: {
            data: [
              {
                title: "Comment Satu",
                description: "Description satu",
              },
              {
                title: "Comment Dua",
                description: "Description dua",
              },
            ],
          },
        },
      },
      include: {
        comments: true,
      },
    });
    console.info(customer);
  });

  it.only("should can find many with filter relation", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        comments: {
          some: {
            title: {
              contains: "Comment",
            },
          },
        },
      },
      include: {
        comments: true,
      },
    });
    console.info(JSON.stringify(customers));
  });
});

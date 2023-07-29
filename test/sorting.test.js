import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can do sorting", async () => {
    const customer = await prismaClient.customer.findMany({
      skip: 0,
      take: 10,
      orderBy: [
        {
          name: "desc",
        },
        {
          email: "asc",
        },
      ],
    });
    console.info(customer);
  });
});

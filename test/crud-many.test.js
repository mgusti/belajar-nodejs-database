import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should create many records", async () => {
    const { count } = await prismaClient.customer.createMany({
      data: [
        {
          id: "joko",
          email: "joko@pzn.com",
          phone: "434242341",
          name: "Joko",
        },
        {
          id: "budi",
          email: "budi@pzn.com",
          phone: "4312314242341",
          name: "Budi",
        },
      ],
    });
    expect(count).toBe(2);
  });

  it("should can update many records", async () => {
    const { count } = await prismaClient.customer.updateMany({
      data: {
        email: "budilagi@pzn.com",
      },
      where: {
        name: "Budi",
      },
    });
    expect(count).toBe(1);
  });

  it("should can delete many records", async () => {
    const { count } = await prismaClient.customer.deleteMany({
      where: {
        name: "Tidak ada",
      },
    });
    expect(count).toBe(0);
  });

  it.only("should can read many records", async () => {
    const customer = await prismaClient.customer.findMany({});
    console.info(customer);
    expect(customer.length).toBe(6);
  });
});

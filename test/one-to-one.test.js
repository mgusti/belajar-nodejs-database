import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can create one to one relation", async () => {
    const wallet = await prismaClient.wallet.create({
      data: {
        id: "eko",
        customer_id: "eko",
        balance: 1000000,
      },
      include: {
        customer: true,
      },
    });

    console.info(wallet);
  });

  it("should can create one to one with relation", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "jaka",
        name: "Jaka",
        email: "jaka@pzn.com",
        phone: "398472942",
        wallet: {
          create: {
            id: "jaka",
            balance: 500000,
          },
        },
      },
      include: {
        wallet: true,
      },
    });
    console.info(customer);
  });

  it("should can find one to one relation", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "eko",
      },
      include: {
        wallet: true,
      },
    });
    console.info(customer);
  });

  it.only("should can find one to one with relation filter", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        wallet: {
          isNot: null,
        },
      },
      include: {
        wallet: true,
      },
    });
    console.info(customers);
  });
});

import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should create and select fields", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "rully",
        name: "Rully",
        email: "rully@pzn.com",
        phone: "4324324",
      },
      select: {
        id: true,
        name: true,
      },
    });
    expect(customer.id).toBe("rully");
    expect(customer.name).toBe("Rully");
    expect(customer.email).toBeUndefined;
    expect(customer.phone).toBeUndefined;
  });

  it.only("should can select fields", async () => {
    const customers = await prismaClient.customer.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    for (let customer of customers) {
      expect(customer.id).toBeDefined;
      expect(customer.name).toBeDefined;
      expect(customer.email).toBeUndefined;
      expect(customer.phone).toBeUndefined;
    }
  });
});

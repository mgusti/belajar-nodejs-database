import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to create customer", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "serenity",
        email: "serenity@pzn.com",
        name: "Ann Serenity",
        phone: "0812121231",
      },
    });

    expect(customer.id).toBe("serenity");
    expect(customer.email).toBe("serenity@pzn.com");
    expect(customer.name).toBe("Ann Serenity");
    expect(customer.phone).toBe("0812121231");
  });

  it("should be able to update customer", async () => {
    const customer = await prismaClient.customer.update({
      data: {
        name: "Ann Zenbu Serenity",
      },
      where: {
        id: "serenity",
      },
    });

    expect(customer.id).toBe("serenity");
    expect(customer.email).toBe("serenity@pzn.com");
    expect(customer.name).toBe("Ann Zenbu Serenity");
    expect(customer.phone).toBe("0812121231");
  });

  it("should be able to read customer", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "serenity",
      },
    });

    expect(customer.id).toBe("serenity");
    expect(customer.email).toBe("serenity@pzn.com");
    expect(customer.name).toBe("Ann Zenbu Serenity");
    expect(customer.phone).toBe("0812121231");
  });

  it.only("should be able to delete customer", async () => {
    const customer = await prismaClient.customer.delete({
      where: {
        id: "serenity",
      },
    });

    expect(customer.id).toBe("serenity");
    expect(customer.email).toBe("serenity@pzn.com");
    expect(customer.name).toBe("Ann Zenbu Serenity");
    expect(customer.phone).toBe("0812121231");
  });
});

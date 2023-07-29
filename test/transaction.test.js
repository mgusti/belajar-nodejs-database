import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can execute sequential transaction", async () => {
    const [eko, kurniawan] = await prismaClient.$transaction(
      [
        prismaClient.customer.create({
          data: {
            id: "eko",
            email: "eko@pzn.com",
            name: "Eko",
            phone: "628324342342",
          },
        }),
        prismaClient.customer.create({
          data: {
            id: "kurniawan",
            email: "kurniawan@pzn.com",
            name: "Kurniawan",
            phone: "629845847839",
          },
        }),
      ],
      {
        timeout: 5,
      }
    );

    expect(eko.name).toBe("Eko");
    expect(kurniawan.name).toBe("Kurniawan");
  });

  it.only("should can execute interactive transaction", async () => {
    const [eko, kurniawan] = await prismaClient.$transaction(
      async (prisma) => {
        const eko = await prisma.customer.create({
          data: {
            id: "eko1",
            email: "eko2@pzn.com",
            name: "Eko",
            phone: "6283243423421",
          },
        });
        const kurniawan = await prisma.customer.create({
          data: {
            id: "kurniawan1",
            email: "kurniawan1@pzn.com",
            name: "Kurniawan",
            phone: "6298458478392",
          },
        });
        return [eko, kurniawan];
      },
      {
        timeout: 5,
      }
    );

    expect(eko.name).toBe("Eko");
    expect(kurniawan.name).toBe("Kurniawan");
  });
});

import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can using or operator", async () => {
    const product = await prismaClient.product.findMany({
      where: {
        OR: [
          {
            name: "A",
          },
          {
            name: "B",
          },
        ],
      },
      orderBy: {
        name: "asc",
      },
    });

    console.info(product);
    expect(product.length).toBe(4);
    expect(product[0].name).toBe("A");
    expect(product[1].name).toBe("A");
    expect(product[2].name).toBe("B");
    expect(product[3].name).toBe("B");
  });
});

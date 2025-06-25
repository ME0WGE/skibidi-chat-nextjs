import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { username, password } = await req.json();

  // TODO: Hash the password before saving in production!
  const user = await prisma.user.create({
    data: { username, password },
  });

  return Response.json({ id: user.id, username: user.username });
}

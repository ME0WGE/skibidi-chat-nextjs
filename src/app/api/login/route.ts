import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { username, password } = await req.json();

  // Cherche l'utilisateur par username
  const user = await prisma.user.findUnique({ where: { username } });

  if (!user || user.password !== password) {
    return new Response(JSON.stringify({ error: "Invalid credentials" }), {
      status: 401,
    });
  }

  // Ici tu pourrais générer un token ou une session
  return Response.json({ id: user.id, username: user.username });
}

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST() {
  await prisma.user.deleteMany({});
  return Response.json({
    success: true,
    message: "Tous les utilisateurs ont été supprimés.",
  });
}

// Execute the function:
// curl -X POST http://localhost:3000/api/delete-users

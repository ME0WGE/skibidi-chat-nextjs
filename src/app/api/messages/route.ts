const messages: {
  id: number;
  content: string;
  sender: string;
  timestamp: string;
}[] = [];
let idCounter = 0;

export async function GET() {
  return Response.json(messages);
}

export async function POST(req: Request) {
  const { content, sender } = await req.json();
  if (!content || !sender) {
    return new Response(
      JSON.stringify({ error: "Content and sender are required" }),
      { status: 400 }
    );
  }
  const newMessage = {
    id: idCounter++,
    content,
    sender,
    timestamp: new Date().toISOString(),
  };
  messages.push(newMessage);
  return Response.json(newMessage, { status: 201 });
}

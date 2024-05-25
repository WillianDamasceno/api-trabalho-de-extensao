export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({ name: new Date().getTime() });
}

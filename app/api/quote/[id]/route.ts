import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { getQuoteCharacter } from "~/db/characters";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextApiRequest,
  context: { params: { id: string } }
) {
  const data = await getQuoteCharacter(Number(context.params.id));
  return NextResponse.json(
    {
      characters: {
        characters_id: data.characters.characters_id,
        characters_name: data.characters.characters_name,
      },
    },
    { status: 200 }
  );
}

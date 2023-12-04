import {
  response200,
  response400,
  response401,
  response500,
} from "@/app/utils";
import {
  getJournalEntriesByUser,
  insertJournalEntry,
  readJournalEntry,
} from "@/model/JournalingModel";
import getUserServerSide from "@/services/server/UserService";
import { z } from "zod";

export async function GET(request: Request) {
  const user = await getUserServerSide();
  if (user === undefined) {
    return response401("User not logged in");
  }
  try {
    const entries = await getJournalEntriesByUser(user.id);
    return response200({ entries });
  } catch (err) {
    console.error(err);
    return response500("Interal server error");
  }
}

export async function POST(request: Request) {
  const requestType = z.object({
    json_content: z.object({}).passthrough(),
  });

  const user = await getUserServerSide();
  if (user === undefined) {
    return response401("User not logged in");
  }

  let body = undefined;
  try {
    body = await request.json();
  } catch (err) {
    return response400("Incorect format");
  }

  const results = requestType.safeParse(body);
  if (!results.success!) {
    return response400("Incorect format");
  }
  const parsedBody = results.data;

  try {
    const resp = await insertJournalEntry(
      user.id,
      parsedBody.json_content,
      new Date()
    );
    const insertedEntry = await readJournalEntry(resp.id);
    return response200({
      message: "Review added in the database.",
      entry: insertedEntry,
    });
  } catch (err) {
    console.error(err);
    return response400("Unable to add review");
  }
}

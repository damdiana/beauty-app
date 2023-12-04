import { getPostgresClient } from "@/services/server/database";
import { JournalEntry } from "@/services/types";
import { JSONContent } from "@tiptap/react";

async function getJournalEntriesByUser(
  userId: number
): Promise<JournalEntry[]> {
  const client = await getPostgresClient();
  const response = await client.query(
    `
        SELECT *
        FROM journalentries
        WHERE user_id = $1
        ORDER BY entry_date DESC
      `,
    [userId]
  );

  return response.rows as JournalEntry[];
}

async function readJournalEntry(id: number) {
  const client = await getPostgresClient();
  const response = await client.query(
    `
        SELECT *
        FROM journalentries
        WHERE id = $1
      `,
    [id]
  );

  return response.rows[0] as JournalEntry;
}

async function insertJournalEntry(
  user_id: number,
  json_content: JSONContent,
  date: Date
) {
  const client = await getPostgresClient();
  const response = await client.query(
    `
      INSERT INTO journalentries (
          user_id, json_content, entry_date
        )
        VALUES ($1, $2, $3)
        RETURNING id`,
    [user_id, json_content, date]
  );

  return response.rows[0];
}

export { getJournalEntriesByUser, insertJournalEntry, readJournalEntry };

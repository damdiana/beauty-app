import { BASE_URL } from "@/Constants";
import { JournalEntry } from "./types";
import { JSONContent } from "@tiptap/react";

async function fetchJournalEntries(): Promise<
  | {
      ok: true;
      entries: JournalEntry[];
    }
  | {
      ok: false;
      message: string;
    }
> {
  let resp = await fetch(`${BASE_URL}/api/journaling`, {
    cache: "no-store",
  });
  if (resp.ok) {
    let jsonResp = await resp.json();
    return {
      ok: true,
      entries: jsonResp.journal_entries,
    };
  } else {
    let jsonResp = await resp.json();
    return {
      ok: false,
      message: jsonResp.message ?? "Something went wrong. Please try again.",
    };
  }
}

async function postJournalEntry(json_content: JSONContent): Promise<
  | {
      ok: true;
      journal_entry: JournalEntry;
    }
  | {
      ok: false;
      message: string;
    }
> {
  try {
    const resp = await fetch(`${BASE_URL}/api/journaling`, {
      method: "POST",
      body: JSON.stringify({
        json_content,
      }),
    });

    if (resp.ok) {
      const jsonResp = await resp.json();
      const journal_entry = {
        ...jsonResp.entry,
        entry_date: new Date(jsonResp.entry.entry_date),
      };
      return {
        ok: true,
        journal_entry,
      };
    } else {
      const jsonResp = await resp.json();
      return {
        ok: false,
        message: jsonResp.message ?? "Something went wrong. Please try again.",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      message: "An error occurred while processing the request.",
    };
  }
}

export { fetchJournalEntries, postJournalEntry };

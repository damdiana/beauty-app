"use client";

import MonthAndDayDate from "@/components/MonthAndDayDate/MonthAndDayDate";
import { EditJournalEntry } from "@/components/JournalEntry/EditJournalEntry";
import { ViewJournalEntry } from "@/components/JournalEntry/ViewJournalEntry";
import { postJournalEntry } from "@/services/JournalingAPI";
import { JournalEntry } from "@/services/types";
import { JSONContent } from "@tiptap/react";
import { useState } from "react";

const JournalPage = ({
  initialJournalEntries,
}: {
  initialJournalEntries: JournalEntry[];
}) => {
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([
    ...initialJournalEntries,
  ]);

  const addNewEntry = async (content: JSONContent) => {
    let resp = await postJournalEntry(content);
    if (resp.ok) {
      setJournalEntries([resp.journal_entry, ...journalEntries]);
    } else {
      //throwing an error in order to inform the child component
      //this way, the child component will know to catch the error
      //and show the correct message to the user
      throw new Error(resp.message);
    }
  };

  return (
    <>
      <p className="font-bold text-center text-xl"> Journaling </p>
      <div className="flex flex-col text-center mt-2">
        <p>
          This page allows you to keep track of your daily routine and the
          results you're seeing in your skin over the course of three months.
        </p>
        <p>
          Note what products you liked, what you disliked and what was the most
          helpful.
        </p>
        <p> Good luck! </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col sm:flex-row items-center sm:justify-around justify-center w-full">
          <MonthAndDayDate date={new Date()} size="large" />
          <EditJournalEntry
            className="w-5/6 sm:w-8/12 sm:h-[28rem] h-[30rem]  m-3"
            onSave={addNewEntry}
          />
        </div>
        {journalEntries.map((entry) => {
          return (
            <div
              key={entry.id}
              className="flex flex-col sm:flex-row items-center sm:justify-around justify-center w-full mt-4 sm:mt-0"
            >
              <MonthAndDayDate date={entry.entry_date} size="large" />
              <ViewJournalEntry
                content={entry.json_content}
                className="sm:w-8/12 w-5/6 m-3 h-96"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export { JournalPage };

"use client";

import MonthAndDayDate from "@/components/MonthAndDayDate/MonthAndDayDate";
import { EditJournalEntry } from "@/components/JournalEntry/EditJournalEntry";
import { ViewJournalEntry } from "@/components/JournalEntry/ViewJournalEntry";
import { JSONContent } from "@tiptap/react";
import { useState } from "react";

const JournalPage = () => {
  const [journalEntries, setJournalEntries] = useState<
    {
      content: JSONContent;
      key: number;
      date: Date;
    }[]
  >([]);

  const addNewEntry = async (content: JSONContent) => {
    const entryPromise = new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });

    await entryPromise;
    setJournalEntries([
      {
        content,
        date: new Date(),
        key: Date.now(),
      },
      ...journalEntries,
    ]);
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
            className="w-5/6 sm:w-8/12 m-3"
            onSave={addNewEntry}
          />
        </div>
        {journalEntries.map((entry) => {
          return (
            <div
              key={entry.key}
              className="flex flex-col sm:flex-row items-center sm:justify-around justify-center w-full mt-4 sm:mt-0"
            >
              <MonthAndDayDate date={entry.date} size="large" />
              <ViewJournalEntry
                content={entry.content}
                className="sm:w-8/12 w-5/6 m-3"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export { JournalPage };

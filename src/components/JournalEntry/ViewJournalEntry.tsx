"use client";

import { EditorContent, JSONContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import "./JournalEntry.css";

export const ViewJournalEntry = ({ content }: { content: JSONContent }) => {
  const editor = useEditor({
    editable: false,
    content: content,
    extensions: [StarterKit],
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="m-3 rounded-md border-black border-solid border-2 sm:w-8/12">
      <EditorContent editor={editor} />
    </div>
  );
};

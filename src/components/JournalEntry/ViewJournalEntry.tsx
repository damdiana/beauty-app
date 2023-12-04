"use client";

import { EditorContent, JSONContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import "./JournalEntry.css";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";

export const ViewJournalEntry = ({
  content,
  className = "",
}: {
  content: JSONContent;
  className?: string;
}) => {
  const editor = useEditor({
    editable: false,
    content: content,
    extensions: [
      StarterKit,
      TextStyle,
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
    ],
  });

  if (!editor) {
    return null;
  }

  return (
    <div
      className={`rounded-md border-black border-solid border-2 ${className}`}
    >
      <EditorContent editor={editor} />
    </div>
  );
};

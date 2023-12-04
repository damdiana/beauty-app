"use client";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import Button from "../Button-Link/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faItalic,
  faList,
  faListOl,
  faMinus,
  faParagraph,
  faRotateLeft,
  faRotateRight,
  faStrikethrough,
} from "@fortawesome/free-solid-svg-icons";
import Placeholder from "@tiptap/extension-placeholder";
import "./JournalEntry.css";

const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }
  const menuButtons = [
    {
      onClick: () => editor.chain().focus().toggleBold().run(),
      disabled: !editor.can().chain().focus().toggleBold().run(),
      activeAction: "bold",
      icon: faBold,
    },
    {
      onClick: () => editor.chain().focus().toggleItalic().run(),
      disabled: !editor.can().chain().focus().toggleItalic().run(),
      activeAction: "italic",
      icon: faItalic,
    },
    {
      onClick: () => editor.chain().focus().toggleStrike().run(),
      disabled: !editor.can().chain().focus().toggleStrike().run(),
      activeAction: "strike",
      icon: faStrikethrough,
    },
    {
      onClick: () => editor.chain().focus().setParagraph().run(),
      activeAction: "paragraph",
      icon: faParagraph,
    },
    {
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      activeAction: "heading",
      content: "h3",
    },
    {
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      activeAction: "bulletList",
      icon: faList,
    },
    {
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      activeAction: "orderedList",
      icon: faListOl,
    },
    {
      onClick: () => editor.chain().focus().setHorizontalRule().run(),
      activeAction: "horizontal",
      icon: faMinus,
    },
    {
      onClick: () => editor.chain().focus().undo().run(),
      disabled: !editor.can().chain().focus().undo().run(),
      activeAction: "undo",
      icon: faRotateLeft,
    },
    {
      onClick: () => editor.chain().focus().redo().run(),
      activeAction: "redo",
      icon: faRotateRight,
    },
    {
      onClick: () => editor.chain().focus().setColor("#FF0000").run(),
      activeAction: "textStyle",
      color: "#FF0000",
      content: "red",
    },
  ];

  return (
    <div className="w-full p-2 pb-3 flex justify-center sm:p-1 border-black border-b-2 border-l-0 border-r-0 border-t-0 gap-1 overflow-auto">
      {menuButtons.map((button, index) => (
        <Button
          key={index}
          onClick={button.onClick}
          disabled={button.disabled}
          className={`m-1 rounded ${
            editor.isActive(button.activeAction) ? "is-active" : ""
          }`}
          variant="full"
          size="medium"
          color="beige"
        >
          {button.icon ? (
            <FontAwesomeIcon icon={button.icon} />
          ) : (
            button.content
          )}
        </Button>
      ))}
    </div>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  Placeholder.configure({
    placeholder: "Add your routine here...",
  }),
  TextStyle,
  StarterKit,
];

export const EditJournalEntry = () => {
  return (
    <div className="m-3 rounded-md border-black border-solid border-2 sm:w-8/12">
      <EditorProvider
        slotBefore={<MenuBar />}
        extensions={extensions}
        // eslint-disable-next-line react/no-children-prop
        children={undefined}
      ></EditorProvider>
    </div>
  );
};

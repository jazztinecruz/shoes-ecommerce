"use client";

import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

type Props = {
  content: string;
  isEditable?: boolean;
};

const RichTextEditor = ({ content, isEditable = true }: Props) => {
  const extensions = [
    StarterKit.configure({
      bulletList: false,
      listItem: false,
    }),
    BulletList.configure({
      HTMLAttributes: {
        class: "flex flex-col gap-2",
      },
    }),
    ListItem.configure({
      HTMLAttributes: {
        class: "list-disc ml-10 text-sm",
      },
    }),
  ];

  return (
    <EditorProvider
      extensions={extensions}
      content={content}
      editable={isEditable}>
      <></>
    </EditorProvider>
  );
};

export default RichTextEditor;

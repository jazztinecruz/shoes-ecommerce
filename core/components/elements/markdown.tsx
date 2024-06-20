"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";

type Props = {
  content: string;
};

const Markdown = ({ content }: Props) => {
  if (!content) return null;

  const editor = useEditor({
    extensions: [
      TextStyle.configure(),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
    ],
    content: content,
  });

  return <EditorContent editor={editor} />;
};

export default Markdown;

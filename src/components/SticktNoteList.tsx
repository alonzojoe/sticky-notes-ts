import React from "react";
import StickyNote from "./StickyNote";
import { Note } from "../lib/types";

const SticktNoteList = ({
  notes,
  onDeleteNote,
}: {
  notes: Note[];
  onDeleteNote: (id: number) => void;
}) => {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <StickyNote
            id={note.id}
            title={note.title}
            description={note.description}
            onDelete={onDeleteNote}
          />
        </li>
      ))}
    </ul>
  );
};

export default SticktNoteList;

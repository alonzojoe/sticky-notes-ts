import { type ReactNode } from "react";
import StickyNote from "./StickyNote";
import InfoBox from "./InfoBox";
import { Note } from "../lib/types";

const SticktNoteList = ({
  notes,
  onDeleteNote,
}: {
  notes: Note[];
  onDeleteNote: (id: number) => void;
}) => {
  let warningMessage: ReactNode;

  if (notes.length >= 4) {
    warningMessage = (
      <InfoBox mode="warning" severity="high">
        You've reached the maximum number of notes.
      </InfoBox>
    );
  }

  return (
    <>
      {warningMessage}
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
    </>
  );
};

export default SticktNoteList;

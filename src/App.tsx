import React, { useState } from "react";
import Header from "./components/Header";
import NewNote from "./components/NewNote";
import InfoBox from "./components/InfoBox";
import StickyNoteList from "./components/SticktNoteList";
import StickyNoteImg from "./assets/sticky.png";
import { Note } from "./lib/types";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const handleAddNote = (title: string, description: string) => {
    if (notes.length >= 4) return;
    setNotes((prevNotes) => {
      const newNote = {
        id: Date.now(),
        title: title,
        description: description,
      };
      return [newNote, ...prevNotes];
    });
  };

  const handleDeleteNote = (id: number) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <main>
      <Header image={{ src: StickyNoteImg, alt: "A list of notes" }}>
        <h1>Your Sticky Notes</h1>
      </Header>
      <NewNote onAddNote={handleAddNote} />
      {notes.length === 0 ? (
        <InfoBox mode="hint">You have no notes yet. Add some?</InfoBox>
      ) : (
        <StickyNoteList notes={notes} onDeleteNote={handleDeleteNote} />
      )}
    </main>
  );
}

export default App;

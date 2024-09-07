import React, { useState } from "react";
import Header from "./components/Header";
import StickyNoteList from "./components/SticktNoteList";
import StickyNoteImg from "./assets/sticky.png";
import { Note } from "./lib/types";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const handleFormSubmit = () => {
    setNotes((prevNotes) => {
      const newNote = {
        id: Date.now(),
        title: "New Note",
        description: "This is a new note",
      };
      return [newNote, ...prevNotes];
    });
  };

  const handleDeleteNote = (id: number) => {
    alert(id);
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <main>
      <Header image={{ src: StickyNoteImg, alt: "A list of notes" }}>
        <h1>Your Sticky Notes</h1>
      </Header>
      <button onClick={handleFormSubmit}>Add Note</button>
      <StickyNoteList notes={notes} onDeleteNote={handleDeleteNote} />
    </main>
  );
}

export default App;

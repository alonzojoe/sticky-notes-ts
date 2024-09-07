import React, { useState } from "react";
import StickyNote from "./components/StickyNote";
import Header from "./components/Header";
import StickyNoteImg from "./assets/sticky.png";

type Note = {
  id: number;
  title: string;
  description: string;
};

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

  return (
    <main>
      <Header image={{ src: StickyNoteImg, alt: "A list of notes" }}>
        <h1>Your Sticky Notes</h1>
      </Header>
      <button onClick={handleFormSubmit}>Add Note</button>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <StickyNote title={note.title} description={note.description} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;

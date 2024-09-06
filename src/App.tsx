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
      <pre>{JSON.stringify(notes)}</pre>
      <StickyNote
        title="My Note"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolor sit est possimus eaque iusto, veritatis consectetur nam "
      />
    </main>
  );
}

export default App;

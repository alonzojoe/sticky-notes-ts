import React, { useRef } from "react";

const NewNote = ({ onAddNote }: { onAddNote: () => void }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enteredTitle = titleRef.current!.value;
    const enteredDescription = descriptionRef.current!.value;

    if (enteredTitle.trim() === "" || enteredDescription.trim() === "") return;

    onAddNote(enteredTitle, enteredDescription);

    titleRef.current!.value = null;
    descriptionRef.current!.value = null;
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <input type="text" id="description" ref={descriptionRef} />
      </p>
      <p>
        <button>Add Note</button>
      </p>
    </form>
  );
};

export default NewNote;

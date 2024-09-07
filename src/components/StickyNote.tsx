import React from "react";

type StickyNoteProps = {
  id: number;
  title: string;
  description: string;
  children?: React.ReactNode;
  onDelete: (id: number) => void;
};

//import { type PropsWithChildren } from "react";
// type StickyNoteProps = PropsWithChildren<{
//   title: string;
//   description: string;
// }>;

const StickyNote = ({ id, title, description, onDelete }: StickyNoteProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

//alternative way of creating ts-component
// const StickyNotes: React.FC<StickyNoteProps> = ({ title, description }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{description}</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

export default StickyNote;

import React, { type PropsWithChildren } from "react";

type StickyNoteProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

//import { type PropsWithChildren } from "react";
// type StickyNoteProps = PropsWithChildren<{
//   title: string;
//   description: string;
// }>;

const StickyNote = ({ title, description }: StickyNoteProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button>Delete</button>
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

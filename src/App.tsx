import StickyNote from "./components/StickyNote";
import Header from "./components/Header";
import StickyNoteImg from "./assets/sticky.png";

function App() {
  return (
    <main>
      <Header image={{ src: StickyNoteImg, alt: "A list of notes" }}>
        <h1>Your Sticky Notes</h1>
      </Header>
      <StickyNote
        title="My Note"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolor sit est possimus eaque iusto, veritatis consectetur nam "
      />
    </main>
  );
}

export default App;

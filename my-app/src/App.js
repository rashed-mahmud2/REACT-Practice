import { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import BioData from "./components/BioData";

// re-rendering of react;
function App() {
  // re-render
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

  const changeTitleHandler = (e) => {
    setNoteTitle(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (noteTitle === "") {
      return alert("please provide a valid title");
    }

    editMode ? updateHandler() : createHandler();
  };

  const createHandler = () => {
    const newNotes = {
      id: Date.now() + "",
      title: noteTitle,
    };

    setNotes([...notes, newNotes]);
    setNoteTitle("");
  };

  const removeHandler = (noteId) => {
    const updatedNotes = notes.filter((item) => item.id !== noteId);
    setNotes(updatedNotes);
  };

  const editHandler = (note) => {
    setEditMode(true);
    setEditableNote(note);
    setNoteTitle(note.title);
  };

  const updateHandler = () => {
    const updatedNotes = notes.map((item) => {
      if (item.id === editableNote.id) {
        return { ...item, title: noteTitle };
      }

      return item;
    });

    setNotes(updatedNotes);
    setEditMode(false);
    setNoteTitle("");
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" value={noteTitle} onChange={changeTitleHandler} />
        <button type="submit">{editMode ? "Update Note" : "Add Note"}</button>
      </form>
      <div className="note-list">
        <h2>All Lists</h2>
        <ul>
          {notes.map((note) => (
            <>
              <li key={note.id}>
                <span>{note.title}</span>
                <button onClick={() => editHandler(note)}>Edit</button>
                <button onClick={() => removeHandler(note.id)}>Delete</button>
              </li>
              <br />
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

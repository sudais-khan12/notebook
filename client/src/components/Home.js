import React, { useContext, useEffect, useState, useRef } from "react";
import noteContext from "../context/notes/noteContext";
import AllNotes from "./AllNotes";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Home = () => {
  const context = useContext(noteContext);
  const { getAllNotes, allNotes } = context;
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getAllNotes();
    } else {
      navigate("/login");
      // showAlert("Please Login First", "warning");
    }
    // eslint-disable-next-line
  }, []);
  const showNote = (currentNote) => {
    ref1.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      econtent: currentNote.content,
      // etag: currentNote.tag,
      edate: currentNote.date,
    });
  };
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    econtent: "",
    etag: "default",
    edate: "",
  });
  const ref1 = useRef(null);
  return (
    <>
      <div className="row">
        <h2>All Notes</h2>
        {allNotes.length === 0 && "No notes to display"}
        {allNotes
          .slice(0)
          .reverse()
          .map((note) => {
            return <AllNotes key={note._id} showNote={showNote} note={note} />;
          })}
      </div>
    </>
  );
};

export default Home;

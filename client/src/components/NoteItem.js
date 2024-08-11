import React, { useContext } from "react";
// import Alert from "./Alert";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote, showNote } = props;

  return (
    <>
      <div className="col-md-3 card bg-light border-info border-2 m-2">
        <div
          className=""
          style={{ cursor: "pointer" }}
          onClick={() => {
            showNote(note);
          }}
        >
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-info"
            style={{ left: "85%", zIndex: "1" }}
          >
            {note.tag}
          </span>
          <div className="card-body">
            <h5 className="card-title">
              {note.title.length > 20
                ? note.title.slice(0, 20) + " ..."
                : note.title}
            </h5>
            <p className="card-text">
              {note.content.length > 30
                ? note.content.slice(0, 30) + " ..."
                : note.content}
            </p>
          </div>
        </div>
        <hr />
        <div>
          <i
            onClick={() => {
              deleteNote(note._id);
            }}
            className="fa-solid fa-trash mx-3 pb-3"
            style={{ color: "red", cursor: "pointer" }}
          ></i>
          <i
            onClick={() => {
              updateNote(note);
            }}
            className="fa-solid fa-file-pen m-2 text-info"
            style={{ cursor: "pointer" }}
          ></i>
        </div>
      </div>
    </>
  );
};

export default NoteItem;

import React, { useContext } from "react";
// import Alert from "./Alert";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card bg-light border-info border-2 mb-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.content}</p>
        </div>
        <div>
          <i
            onClick={() => {
              deleteNote(note._id);
            }}
            className="fa-solid fa-trash m-3"
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
    </div>
  );
};

export default NoteItem;

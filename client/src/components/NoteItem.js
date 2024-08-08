import React from "react";
import Alert from "./Alert";
const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card bg-light border-info border-2 mb-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.content}</p>
        </div>
        <div>
          <i
            className="fa-solid fa-trash m-3"
            style={{ color: "red", cursor: "pointer" }}
          ></i>
          <i
            className="fa-solid fa-file-pen m-2 text-info"
            style={{ cursor: "pointer" }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;

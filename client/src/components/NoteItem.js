import React, { useContext, useRef } from "react";
// import Alert from "./Alert";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  const ref = useRef(null);
  const show = () => {
    ref.current.click();
  };
  return (
    <>
      <button
        ref={ref}
        type="button"
        className="btn btn-info d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal1"
      ></button>

      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModal1Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModal1Label">
                Your Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h4>Title </h4>
              <p>{note.title}</p>
              <h4>Content </h4>
              <p>{note.content}</p>
              <h4>Tag </h4>
              <p>{note.tag}</p>
            </div>
            <div className="modal-footer">
              <h5>Created on : </h5>
              <small className="text-muted">
                {new Date(note.date).toUTCString()}
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3 card bg-light border-info border-2 m-3">
        <div className="" style={{ cursor: "pointer" }} onClick={show}>
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-info"
            style={{ left: "85%", zIndex: "1" }}
          >
            {note.tag}
          </span>
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.content}</p>
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

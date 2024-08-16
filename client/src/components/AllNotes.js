import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import moment from "moment";

const AllNotes = (props) => {
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
        <div className="modal-footer d-flex justify-content-start">
          <h5>Created on : </h5>
          <small className="text-muted pt-1">
            {moment(note.date).fromNow()}
          </small>
        </div>
      </div>
    </>
  );
};

export default AllNotes;

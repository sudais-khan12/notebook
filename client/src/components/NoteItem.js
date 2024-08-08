import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card bg-light border-info border-2 mb-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.content}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;

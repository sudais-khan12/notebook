import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNote, editNote } = context;
  useEffect(() => {
    getNote();
    // eslint-disable-next-line
  }, []);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      econtent: currentNote.content,
      etag: currentNote.tag,
    });
  };
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    econtent: "",
    etag: "default",
  });

  const handleSubmit = (e) => {
    editNote(note.id, note.etitle, note.econtent, note.etag);
    e.preventDefault();
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const ref = useRef(null);

  return (
    <>
      <AddNote />
      <button
        ref={ref}
        type="button"
        className="btn btn-info d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      ></button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="">
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title (Recommended)
                  </label>
                  <input
                    type="text"
                    className="form-control border-info border-2"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag (Optional)
                  </label>
                  <input
                    type="text"
                    className="form-control border-2"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="econtent" className="form-label">
                    Note (Recommended)
                  </label>
                  <textarea
                    className="form-control border-info border-2"
                    id="econtent"
                    name="econtent"
                    rows="3"
                    value={note.econtent}
                    onChange={onChange}
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button "
                className="btn btn-info"
                onClick={handleSubmit}
                data-bs-dismiss="modal"
                disabled={note.etitle.length < 5 || note.econtent.length < 5}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <h2>All Notes</h2>
        {notes.length === 0 && "No notes to display"}
        {notes
          .slice(0)
          .reverse()
          .map((note) => {
            return (
              <NoteItem key={note._id} updateNote={updateNote} note={note} />
            );
          })}
      </div>
    </>
  );
};

export default Notes;

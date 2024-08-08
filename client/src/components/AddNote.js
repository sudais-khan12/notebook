import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", content: "", tag: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note.title, note.content, note.tag);
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="mb-5">
        <h2>Add Notes</h2>
        <form action="">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title (Recommended)
            </label>
            <input
              type="text"
              className="form-control border-info border-2"
              id="title"
              name="title"
              placeholder="Any Title"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag (Optional)
            </label>
            <input
              type="text"
              className="form-control border-2"
              id="tag"
              name="tag"
              placeholder="Any Tag"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Note (Recommended)
            </label>
            <textarea
              className="form-control border-info border-2"
              id="content"
              name="content"
              rows="3"
              onChange={onChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-info" onClick={handleSubmit}>
            Add <i className="fa-solid fa-check ms-2"></i>
          </button>
        </form>
      </div>
      <hr className=" border-info border-2" />
    </>
  );
};

export default AddNote;

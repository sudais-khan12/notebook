import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = ({ showAlert }) => { 
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", content: "", tag: "default" });
  const handleSubmit = (e) => {
    e.preventDefault();
    document.querySelectorAll("input").forEach((el) => (el.value = ""));
    document.querySelector("textarea").value = "";
    addNote(note.title, note.content, note.tag);
    showAlert("Added Successfully", "success");
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
              placeholder="Any Content" 
              onChange={onChange}
            ></textarea>
          </div>
          <button
            disabled={note.title.length < 5 || note.content.length < 5}
            type="submit"
            className="btn btn-info"
            onClick={handleSubmit}
          >
            Add <i className="fa-solid fa-check ms-2"></i>
          </button>
        </form>
      </div>
      <hr className=" border-info border-2" />
    </>
  );
};

export default AddNote;

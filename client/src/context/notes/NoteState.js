import React, { useState } from "react";
import noteContext from "./noteContext";
import Alert from "../../components/Alert";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initialNotes = [];

  const [notes, setNotes] = useState(initialNotes);

  // Get all Notes

  const getNote = async () => {
    const response = await fetch(`${host}/api/notes/retrieve`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMTlkYTVjMGIyNDAxYWQwMDVmYjRhIn0sImlhdCI6MTcyMjkxNjI2MX0.x0TmuevrcI0LbsLF0qWA0tXkIfZ5MAEFVk56xfLw_Ng",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // Add a Note

  const addNote = async (title, content, tag) => {
    await fetch(`${host}/api/notes/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMTlkYTVjMGIyNDAxYWQwMDVmYjRhIn0sImlhdCI6MTcyMjkxNjI2MX0.x0TmuevrcI0LbsLF0qWA0tXkIfZ5MAEFVk56xfLw_Ng",
      },
      body: JSON.stringify({ title, content, tag }),
    });

    // const json = await response.json();
    const note = {
      _id: "66b19d7bc0b2401ad005fb461w1",
      user: "66b17cbb6c3539cf08e2c012321",
      title,
      content,
      tag,
      date: "2024-08-06T03:50:19.576Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
    console.log("New Note Added", note);
  };

  // Delete a Note

  const deleteNote = async (id) => {
    await fetch(`${host}/api/notes/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMTlkYTVjMGIyNDAxYWQwMDVmYjRhIn0sImlhdCI6MTcyMjkxNjI2MX0.x0TmuevrcI0LbsLF0qWA0tXkIfZ5MAEFVk56xfLw_Ng",
      },
    });

    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  };

  // Edit a Note

  const editNote = async (id, title, content, tag) => {
    await fetch(`${host}/api/notes/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMTlkYTVjMGIyNDAxYWQwMDVmYjRhIn0sImlhdCI6MTcyMjkxNjI2MX0.x0TmuevrcI0LbsLF0qWA0tXkIfZ5MAEFVk56xfLw_Ng",
      },
      body: JSON.stringify({ title, content, tag }),
    });

    let newNotes = JSON.parse(JSON.stringify(notes));

    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].content = content;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <noteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNote }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;

import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const [token, setToken] = useState(null);
  const host = "http://localhost:5000";
  const initialNotes = [];

  const [notes, setNotes] = useState(initialNotes);
  useEffect(() => {
    const storedToken = Cookies.get("token");
    setToken(storedToken);
  }, []);
  // Get all Notes

  const getNote = async () => {
    const response = await fetch(`${host}/api/notes/retrieve`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // Add a Note

  const addNote = async (title, content, tag) => {
    const response = await fetch(`${host}/api/notes/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify({ title, content, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };

  // Delete a Note

  const deleteNote = async (id) => {
    await fetch(`${host}/api/notes/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
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
        "auth-token": token,
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

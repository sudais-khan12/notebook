import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const initialNotes = [
    {
      _id: "66b193cf0d8de5b55ae14db7",
      user: "66b17cbb6c3539cf08e2c012",
      title: "College",
      content: "College at 9 am with alyan",
      tag: "study",
      date: "2024-08-06T03:09:03.064Z",
      __v: 0,
    },
    {
      _id: "66b193cf0d8de5b55ae14db9",
      user: "66b17cbb6c3539cf08e2c012",
      title: "College",
      content: "College at 9 am with alyan",
      tag: "study",
      date: "2024-08-06T03:09:03.666Z",
      __v: 0,
    },
    {
      _id: "66b193cf0d8de5b55ae14dbb",
      user: "66b17cbb6c3539cf08e2c012",
      title: "College",
      content: "College at 9 am with alyan",
      tag: "study",
      date: "2024-08-06T03:09:03.754Z",
      __v: 0,
    },
    {
      _id: "66b193cf0d8de5b55ae14dbd",
      user: "66b17cbb6c3539cf08e2c012",
      title: "College",
      content: "College at 9 am with alyan",
      tag: "study",
      date: "2024-08-06T03:09:03.905Z",
      __v: 0,
    },
    {
      _id: "66b193d00d8de5b55ae14dbf",
      user: "66b17cbb6c3539cf08e2c012",
      title: "College",
      content: "College at 9 am with alyan",
      tag: "study",
      date: "2024-08-06T03:09:04.060Z",
      __v: 0,
    },
    {
      _id: "66b193d00d8de5b55ae14dc1",
      user: "66b17cbb6c3539cf08e2c012",
      title: "College",
      content: "College at 9 am with alyan",
      tag: "study",
      date: "2024-08-06T03:09:04.204Z",
      __v: 0,
    },
    {
      _id: "66b193d00d8de5b55ae14dc3",
      user: "66b17cbb6c3539cf08e2c012",
      title: "College",
      content: "College at 9 am with alyan",
      tag: "study",
      date: "2024-08-06T03:09:04.499Z",
      __v: 0,
    },
    {
      _id: "66b193d00d8de5b55ae14dc5",
      user: "66b17cbb6c3539cf08e2c012",
      title: "College",
      content: "College at 9 am with alyan",
      tag: "study",
      date: "2024-08-06T03:09:04.901Z",
      __v: 0,
    },
    {
      _id: "66b19bed0af6836b5c2e3651",
      user: "66b17cbb6c3539cf08e2c012",
      title: "nahi jarrha",
      content: "College at 9 am with alyan",
      tag: "kuch nahi",
      date: "2024-08-06T03:43:41.389Z",
      __v: 0,
    },
    {
      _id: "66b19c120af6836b5c2e3654",
      user: "66b17cbb6c3539cf08e2c012",
      title: "nahi jarrha",
      content: "College at 9 am with alyan",
      tag: "kuch nahi",
      date: "2024-08-06T03:44:18.825Z",
      __v: 0,
    },
    {
      _id: "66b19cb20af6836b5c2e365b",
      user: "66b17cbb6c3539cf08e2c012",
      title: "nahi jarrha",
      content: "College at 9 am with alyan",
      tag: "kuch nahi",
      date: "2024-08-06T03:46:58.100Z",
      __v: 0,
    },
    {
      _id: "66b19d7bc0b2401ad005fb46",
      user: "66b17cbb6c3539cf08e2c012",
      title: "nahi jarrha",
      content: "College at 9 am with alyan",
      tag: "kuch nahi",
      date: "2024-08-06T03:50:19.576Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(initialNotes);

  return (
    <noteContext.Provider value={{notes, setNotes}}>{props.children}</noteContext.Provider>
  );
};

export default NoteState;

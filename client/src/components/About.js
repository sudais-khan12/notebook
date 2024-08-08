import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const About = () => {
  const a = useContext(noteContext);
  return (
    <div>
      I am {a.content} and my Roll Number is {a.id}
    </div>
  );
};

export default About;

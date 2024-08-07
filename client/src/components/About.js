import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";

const About = () => {
  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  }, []);
  const a = useContext(noteContext);
  return (
    <div>
      I am {a.state.name} and my Roll Number is {a.state.id}
    </div>
  );
};

export default About;

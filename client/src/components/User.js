import React from "react";
import Notes from "../components/Notes";

const User = (props) => {
  const { showAlert } = props;
  return (
    <>
      <Notes showAlert={showAlert} />
    </>
  );
};

export default User;

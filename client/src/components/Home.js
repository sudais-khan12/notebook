import React from "react";
import Notes from "../components/Notes";

const Home = () => {
  return (
    <>
      <div className="mb-5">
        <h2>Add Notes</h2>
        <form action="">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Title (Recommended)
            </label>
            <input
              type="text"
              className="form-control border-info border-2"
              id="exampleFormControlInput1"
              placeholder="Any Title"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Tag (Optional)
            </label>
            <input
              type="text"
              className="form-control border-2"
              id="exampleFormControlInput1"
              placeholder="Any Tag"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Note (Recommended)
            </label>
            <textarea
              className="form-control border-info border-2"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-info">
            Add 👍
          </button>
        </form>
      </div>
      <hr className=" border-info border-2" />
      <Notes />
    </>
  );
};

export default Home;

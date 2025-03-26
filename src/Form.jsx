import { useState } from "react";

export default function Form() {
  const [newTitle, setNewTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-4 mt-4 p-3">
        <div className="mb-3">
          <label htmlFor="exampleInputTitle" className="form-label">
            New Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputTitle"
            aria-describedby="Title of the new article"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            Type a title for a new Article about cats
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Add new article
          </button>
        </div>
      </form>
    </>
  );
}

import React, { useState } from "react";
import faker from "faker";

const SearchBar = ({ onFormSubmit }) => {
  const [text, setText] = useState("");

  const onSearchSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(text);
  };

  const onShuffleSumbit = () => {
    let text = faker.random.word();
    setText(text);
    onFormSubmit(text);
  };

  return (
    <div>
      <form
        className="form-inline d-flex"
        onSubmit={onSearchSubmit}
        id="searchForm"
      >
        <i className="fab fa-youtube fa-2x text-danger mr-2"></i>

        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Search"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
          style={{ flex: "1" }}
        />

        <button className="btn btn-raised btn-primary ml-2" type="submit">
          <i className="fas fa-search"></i>
        </button>

        <button
          className="btn btn-raised btn-info ml-2"
          onClick={onShuffleSumbit}
        >
          <i className="fas fa-dice"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

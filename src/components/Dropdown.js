import React, { Fragment } from "react";

const Dropdown = ({ options, selection, onSelectionChange }) => {
  const items = options.map((item, index) => {
    if (item === selection) return null;
    return (
      <div
        key={index}
        className="dropdown-item"
        onClick={() => onSelectionChange(item)}
      >
        {item.label}
      </div>
    );
  });

  return (
    <Fragment>
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-toggle="dropdown"
      >
        {selection.label}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {items}
      </div>
    </Fragment>
  );
};

export default Dropdown;

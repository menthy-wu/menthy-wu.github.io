import React from "react";

const Art = ({ toggle, link }) => {
  return (
    <div className="m-4">
      <img
        onClick={() => {
          toggle(link);
        }}
        src={link}
      />
    </div>
  );
};
export default Art;

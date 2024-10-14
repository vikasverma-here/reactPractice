import React from "react";

import { useState } from "react";
function Addtodo() {
  const [title, setTitle] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Add todo "
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
     
    </div>
  );
}

export default Addtodo;

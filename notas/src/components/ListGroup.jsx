import React from "react";

export default function ListGroup({children}) {
  return (
    <div>
      <ol className="list-group list-group-numbered">
        {children}
      </ol>
    </div>
  );
}

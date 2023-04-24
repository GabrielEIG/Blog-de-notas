import React from "react";

export default function Notas({id, title, content, deleteNota, getNota}) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{title}</div>
        {content}
      </div>
      <div className="d-flex justify-content-between">
        <button className="btn btn-info btn-sm ml-3" onClick={(e)=>{getNota(id)}}>Editar</button>
        <button className="btn btn-outline-danger btn-sm" onClick={(e)=>{deleteNota(id)}}>Eliminar</button>
      </div>
    </li>
  );
}

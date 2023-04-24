import React, { useEffect, useState } from "react";
import ListGroup from "../components/ListGroup";
import Form from "../components/form";
import Notas from "../components/Notas";

export default function Index() {
  const [notas, setNotas] = useState([]);
  const [oldNota, setOldNota] = useState([]);

  const getDatas = async () => {
    const response = await fetch("http://localhost:3001/api/notas");
    const result = await response.json();
    setNotas(result);
  };

  const deleteNota = async (id) => {
    await fetch("http://localhost:3001/api/notas/" + id, {
      method: "DELETE",
      mode: "cors",
    });
  };

  const getNota = async(id)=>{
    const nota = await fetch("http://localhost:3001/api/notas/" + id);
    const result = await nota.json();
    setOldNota(result)
  }

  useEffect(() => {
    getDatas();
  }, [notas]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <Form oldNota={oldNota}/>
        </div>
        <div className="col-sm-12 col-md-8">
          <ListGroup>
            {Array.isArray(notas) &&
              notas.map((nota, index) => {
                return (
                  <Notas
                    key={index}
                    id={nota._id}
                    title={nota.title}
                    content={nota.content}
                    deleteNota={deleteNota}
                    getNota={getNota}
                  />
                );
              })}
          </ListGroup>
        </div>
      </div>
    </div>
  );
}

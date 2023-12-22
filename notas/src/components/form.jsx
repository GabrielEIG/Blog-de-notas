import React, { useEffect, useState } from "react";

export default function Form({ oldNota }) {
  const [nota, setNota] = useState({
    title: "",
    content: "",
  });
  const server = "https://blog-de-notas.onrender.com/";

  const handleChange = (e) => {
    let event = e.target;
    let newNota = {
      [event.name]: event.value,
      [event.name]: event.value,
    };
    setNota({ ...nota, ...newNota });
    console.log(nota);
  };

  const saveNota = async () => {
    let URL = '';
    let params = {};
    if(nota._id){
        URL = server + 'api/notas/' + nota._id
        params = {
            method: "PATCH",
            mode: "cors",
            body: JSON.stringify(nota),
            headers: {
                "content-Type": "application/json",
            }
        }
    }else{
        URL = server + 'api/notas'
        params = {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(nota),
            headers: {
                "content-Type": "application/json",
            }
        }
    }


    await fetch(URL,params);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    saveNota();
    setNota({
      title: "",
      content: "",
    });
  };

  useEffect(() => {
    setNota({...nota,...oldNota});
  }, [oldNota]);

  return (
    <div className="card">
      <div className="card-header">Agregar nota</div>
      <div className="card-body">
        <form action="" onSubmit={onSubmit}>
          <div className="form-group mb-3">
            <input
              name="title"
              value={nota.title}
              onChange={handleChange}
              type="text"
              placeholder="Titulo"
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <textarea
              name="content"
              value={nota.content}
              onChange={handleChange}
              placeholder="Agregar contenido"
              className="form-control"
            ></textarea>
          </div>
          {nota._id ? (
            <button
              type="submit"
              className="btn btn-outline-success btn-ms btn-block"
            >
              Actualizar
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-outline-success btn-ms btn-block"
            >
              Enviar
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

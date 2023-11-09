import React from "react";

function Data({nombre, descripcion}){
    return(
        <div>
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
        </div>
    )
}

export default Data
import React from "react";

function Producto({subtitulo,parrafo,img}){
    return(
        <div>
            <h1>{subtitulo}</h1>
            <p>{parrafo}</p>
            <img src={img} alt="no funciono" />
        </div>
    )
}

export default Producto;
import React from "react"

function Saludar({nombre}){
    return(
        <div>
            <div className="Data">
                <h1>Hola como estas</h1>
                <p>mi nombre es {nombre}</p>
            </div>

            <div>
                <button onClick={Agradecer} type="button">APRETAAAR</button>
            </div>
        </div>
    )
}



export default Saludar
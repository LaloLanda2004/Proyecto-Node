import React, { useState } from "react"
// import Data from "./componentes/Data";
import Producto from "./componentes/Producto";
import imagen1 from "./img/imagen1.jpg";
import imagen2 from "./img/imagen2.jpg";
// import { resolvePackageEntry } from "vite";
// import Saludar from "./componentes/Saludar"
// import Ignorar from "./Welcome";



// function App() {

//   function Agradecer(){
//   alert("HOLA")
//   }
//   // let nombre = "lazaro";
//   // let paginas = "noticias"

//   return (

//     <>
//     <Saludar nombre = "lazaro"/>
//     </>

//     // <>


//     // <h1>¡Hola Mundo!</h1>


//     // <h1>¡Hola soy {nombre}!</h1>

//     // <p>te queria decir que me gustaria hacer una pagina de {paginas} </p>

//     // </>
//   )
// }
// export default App

////////////////////////////////////////////////////

// import React from "react";

// const Bienvenido = ({nombre, apellido, localidad }) => {
//   console.log(nombre)
//   return (
//     <h1>
//       Hola {nombre} {apellido} de {localidad}
//     </h1>
//   );
// };

// const Saludar = () => {
//   return (
//     <>
//       <Bienvenido nombre="lazaro" apellido="france" localidad="llavallol" />
//     </>
//   );
// };


/////////////////////////////////////////


// function Persona ({nombre,edad}){
//   return(
//     <div>
//       <h1>nombre: {nombre}</h1>
//       <h2>edad: {edad}</h2>
//     </div>
//   )
// }

// function Datos(){
//   return(
//     <Persona nombre = "Pablo" edad = "25"/>
//   )
// }


////////////////////////////////////////////

// function Interaccion(){
//   const [text, setText] = useState(``);

//   return(
//     <>
//     <button className="btn" id="btn" onClick={Apretar}>Apretame</button>
//     <h1>{text}</h1>
//     </>
//   );

//   function Apretar(event){
//     event.preventDefault();
//     // alert("que onda perrooo");
//     // console.log(`Holaaa`)

//     setText(`Que ondaaa`)

//   }
// }




//////////////////////////////////


// function Contador(){
//   const [cont, setCont] = useState(0);

//   return(
//     <div>
//       <h1>{cont}</h1>
//       <button className="btn" onClick={Iteracion}>Apretar para sumar</button>
//     </div>
//   )

//   function Iteracion(event){
//     event.preventDefault();
//     // console.log("funciona el btn")
//     setCont(cont + 1);
//   }
// }



/*               PRACTICA                    */

// function App(){
//   return(
//     <div className="container">
//       <Data nombre = "Servicios" descripcion = "Pepe"/>
//       <Data nombre = "Servicios" descripcion = "Pepe"/>
//     </div>
//   )
// }


/*              ENTREGA                   */

function App() {
  return (
    <div>
      <Producto subtitulo="Producto #1" parrafo = "este producto es de gran calidad porque viene exportado de Asia" img = {imagen1} />
      <Producto subtitulo="Producto #2" parrafo = "este producto es de gran calidad porque viene exportado de Asia" img = {imagen2}/>
    </div>
  )
}

export default App;
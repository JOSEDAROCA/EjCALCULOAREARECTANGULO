import "./styles.css";

let btnBase = document.getElementById("btnBase");
let dato = document.getElementById("dato");
let rotulo = document.getElementById("rotulo");
rotulo.innerHTML = "Ingrese medida de Base: ";


btnBase.addEventListener("click" , () => {
  console.log("La Base es ",dato.value);
}


let btnAltura = document.getElementById("btnAltura");
let dato2 = document.getElementById("dato2");
let rotulo2 = document.getElementById("rotulo2");
rotulo2.innerHTML = "Ingrese medida de Altura: ";

btnAltura.addEventListener("click" , () => {
  console.log("La altura es ",dato2.value);
}



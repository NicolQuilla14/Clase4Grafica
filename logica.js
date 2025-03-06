let textoGuardado = "";

function guardarTexto() {
    textoGuardado = document.getElementById("texto").value;
    alert("texto guardado ");
}

function buscarPalabra() {
    
    let palabra = document.getElementById("palabra").value;
    let posicion = textoGuardado.split(" ").indexOf(palabra);


    if (posicion !== -1) {
        alert(`La palabra "${palabra}" está en la posición ${posicion + 1}`);
    } else {
        alert("La palabra NO fue encontrada.");
    }
        
}
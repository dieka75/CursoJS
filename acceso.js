let free = false;

const validarCliente = (time) =>{
    let edad = prompt("que edad tenes?")
    if (edad > 18) {
        if (time >= 2 && time< 7 && free ==false) {
            alert("podes pasar gratis porque sos la primera persona despues de las 2 AM")
            free = true;
        }
        else {
            alert(`son las ${time}:00 Hs. y podes pasar abonando la entrada`),
            }
    } else {
        alert("sos menor de edad...no podes pasar")
}
}

validarCliente(23);
validarCliente(24);
validarCliente(1);
validarCliente(2);
validarCliente(3);

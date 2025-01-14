
function añadirProducto () {
    let producto = prompt("Escribe el producto que deseas agregar al carrito");
    return producto
}

function agregar () {
    let agregar = prompt("Si deseas agregar otro producto presiona y");

    if (agregar === "y") {
        return true
    }

    else {
        return false
    }

}

function inicializarCodigo () {
    let productosTotales = []
    
    productosTotales.push(añadirProducto())

    while (agregar() === true ) {
        productosTotales.push(añadirProducto())
    }
    alert("Sus productos son " + productosTotales)
}


inicializarCodigo()
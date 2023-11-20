import catalogo from './catalogo.json';

const ordenado = []

function verificarItem(i) {
    const nombre = i.name.split(' ')[0].toLowerCase()
    return !!ordenado.find(g => g.name === nombre);
}

function agregarItem(i) {
    const nombre = i.name.split(' ')[0].toLowerCase()
    ordenado.forEach(g => {
        if (g.name === nombre) {
            g.products.push(i)
        }
    })
}

function crearGrupo(i) {
    const nombre = i.name.split(' ')[0].toLowerCase()
    ordenado.push({
        name: nombre,
        products: [i]
    })
}

function renombrar(i) {
    const boolean = i.name.includes('Zapatillas');
    if (boolean) {
        const arr = i.name.split(' ');
        arr.shift();
        const nuevoNombre = arr.join(' ')
        i.name = nuevoNombre;
    }
}

export function actualizar() {
    return zapas.map(p => {
        if (!p.name.includes('Zapatillas')) p.name = "Zapatillas " + p.name
        return p;
    })
}
export function ordenar() {
    catalogo.forEach(i => {
        renombrar(i)
        if (verificarItem(i)) agregarItem(i)
        else crearGrupo(i)
    })
    return ordenado;
}

export function conteo() {
    var contador = 0;
    ordenado.forEach(c => contador += c.products.length);
    return contador;
}
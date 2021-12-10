class ListaCircular {
    constructor() {
        this.tamaño = 0;
        this.origen = null;
    }

    add(pos, info) {
        let nuevo = new Nodo(info);
        if (pos == 0) {
            this.addFirst(info);
        } else if (pos == this.tamaño) {
            this.addLast(info);
        } else if (pos > 0 && pos < this.tamaño) {
            let aux = this.origen;
            for (let i = 0; i < pos - 1; i++) {
                aux = aux.siguiente;
            }
            let actual = aux.siguiente;
            aux.siguiente = nuevo;
            nuevo.siguiente = actual;
            this.tamaño++;
        }
    }

    addFirst(info) {
        let nuevo = new Nodo(info);
        if (this.origen == null) {
            this.origen = nuevo;
            this.origen.siguiente = this.origen;
        } else {
            let aux = this.origen;
            while (aux.siguiente != this.origen) {
                aux = aux.siguiente;
            }
            aux.siguiente = nuevo;
            nuevo.siguiente = this.origen;
        }
        this.origen = nuevo;
        this.tamaño++;
    }

    addLast(info) {
        let nuevo = new Nodo(info);
        if (this.isEmpty()) {
            this.addFirst(info);
        } else {
            let aux = this.origen.siguiente;
            while (aux.siguiente != this.origen) {
                aux = aux.siguiente;
            }
            aux.siguiente = nuevo;
            nuevo.siguiente = this.origen;
            this.tamaño++;
        }

    }

    remove(pos) {
        if (pos > (this.tamaño - 1) ||  pos < 0) {
            throw new Error("Fuera del rango");
        } else {
            if (pos == 0) {
                this.removeFirst();
            } else if (pos == this.tamaño - 1) {
                this.removeLast();
            } else if (pos > 0 && pos < (this.tamaño - 1)) {
                let aux = this.origen;
                for (let i = 0; i < pos - 1; i++) {
                    aux = aux.siguiente;
                }
                aux.siguiente = aux.siguiente.siguiente;
                this.tamaño--;
            }
        }
    }

    removeFirst() {
        if (this.isEmpty()) {
            throw new Error("Lista vacia");
        } else {
            let aux = this.origen;
            while (aux.siguiente != this.origen) {
                aux = aux.siguiente;
            }
            let eliminar = this.origen;
            this.origen = eliminar.siguiente;
            eliminar.siguiente = null;
            eliminar = null;
            aux.siguiente = this.origen;
            this.tamaño--;
        }
    }

    removeLast() {
        if (this.isEmpty()) {
            throw new Error("Lista vacia");
        } else {
            let aux = this.origen.siguiente;
            while (aux.siguiente.siguiente != this.origen) {
                aux = aux.siguiente;
            }
            let eliminar = aux.siguiente;
            aux.siguiente = this.origen;
            eliminar.siguiente = null;
            eliminar = null;
            this.tamaño--;
        }
    }

    set(pos, info) {
        if (pos > (this.tamaño - 1) ||  pos < 0) {
            throw new Error("Fuera del rango");
        } else {
            if (pos == 0) {
                this.origen.info = info;
            } else if (pos > 0 && pos <= this.tamaño) {
                let aux = this.origen;
                let posicion = 0;
                while (posicion != pos && posicion != (this.tamaño - 1)) {
                    aux = aux.siguiente;
                    posicion++;
                }
                aux.info = info;
            }
        }
    }

    get(pos) {
        let consulta = null;
        if (pos == 0) {
            consulta = this.origen;
        } else if (pos > 0 && pos <= this.tamaño) {
            let aux = this.origen;
            let posicion = 0;
            while (posicion != pos && posicion != (this.tamaño - 1)) {
                aux = aux.siguiente;
                posicion++;
            }
            consulta = aux;
        }
        return consulta;
    }

    isEmpty() {
        return this.origen == null;
    }

    size() {
        return this.tamaño;
    }

    iterator() {
        return this.origen;
    }

    print() {
        if (this.isEmpty()) {
            console.log("Lista vacia");
        } else {
            let aux = this.origen;
            do {
                console.log(aux.info);
                aux = aux.siguiente;
            } while (aux != this.origen);
        }
    }
}
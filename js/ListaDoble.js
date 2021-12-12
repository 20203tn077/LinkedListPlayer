class ListaDoble {
    constructor() {
        this.tamaño = 0;
        this.origen = null;
        this.final = null;
    }

    add(pos, info) {
        if (pos == 0) {
            this.addFirst(info);
        } else if (pos == this.tamaño) {
            this.addLast(info);
        } else if (pos > 0 && pos < this.tamaño) {
            let nuevo = new Nodo(info);

            let actual = this.origen;
            for (let i = 0; i < pos; i++) {
                actual = actual.siguiente;
            }
            let anterior = actual.anterior;

            anterior.siguiente = nuevo
            nuevo.anterior = anterior;

            nuevo.siguiente = actual;
            actual.anterior = nuevo;

            this.tamaño++;
        } else {
            throw new Error("Fuera del rango");
        }
    }

    addFirst(info) {
        let nuevo = new Nodo(info);
        if (this.isEmpty()) {
            this.origen = nuevo;
            this.final = nuevo;
        } else {
            nuevo.siguiente = this.origen;
            this.origen.anterior = nuevo;

            this.origen = nuevo;
        }
        this.tamaño++;
    }

    addLast(info) {
        let nuevo = new Nodo(info);
        if (this.isEmpty()) {
            this.origen = nuevo;
            this.final = nuevo;
        } else {
            this.final.siguiente = nuevo;
            nuevo.anterior = this.final;

            this.final = nuevo;
        }
        this.tamaño++;
    }

    remove(pos) {
        if (pos == 0) {
            this.removeFirst();
        } else if (pos == this.tamaño - 1) {
            this.removeLast();
        } else if (pos > 0 && pos < this.tamaño - 1) {
            let actual = this.origen;
            for (let i = 0; i < pos; i++) {
                actual = actual.siguiente;
            }
            let anterior = actual.anterior;
            let siguiente = actual.siguiente;

            anterior.siguiente = siguiente;
            siguiente.anterior = anterior;

            this.tamaño--;
        } else {
            throw new Error("Fuera del rango");
        }
    }

    removeFirst() {
        if (this.isEmpty()) {
            throw new Error("Lista vacía");
        } else {
            if (this.tamaño == 1) {
                this.origen = null;
                this.final = null;
            } else {
                let siguiente = this.origen.siguiente;
                siguiente.anterior = null;
                this.origen = siguiente;
            }
            this.tamaño--;
        }
    }

    removeLast() {
        if (this.isEmpty()) {
            throw new Error("Lista vacía");
        } else {
            if (this.tamaño == 1) {
                this.origen = null;
                this.final = null;
            } else {
                let anterior = this.final.anterior;
                anterior.siguiente = null;
                this.final = anterior;
            }
            this.tamaño--;
        }
    }

    set(pos, info) {
        if (this.isEmpty()) {
            throw new Error("Lista vacía");
        } else {
            if (pos >= 0 && pos < this.tamaño) {
                let aux = this.origen;
                for (let i = 0; i < pos; i++) {
                    aux = aux.siguiente;
                }
                aux.info = info;
            } else {
                throw new Error("Fuera del rango");
            }
        }
    }

    get(pos) {
        if (this.isEmpty()) {
            throw new Error("Lista vacía");
        } else {
            if (pos >= 0 && pos < this.tamaño) {
                let aux = this.origen;
                for (let i = 0; i < pos; i++) {
                    aux = aux.siguiente;
                }
                return aux.info;
            } else {
                throw new Error("Fuera del rango");
            }
        }
    }

    isEmpty() {
        return this.origen == null;
    }

    size() {
        return this.tamaño;
    }

    firstIterator() {
        return this.origen;
    }

    lastIterator() {
        return this.final;
    }

    print() {
        if (this.isEmpty()) {
            console.log("Lista vacía");
        } else {
            for (let i = this.origen; i != null; i = i.siguiente) {
                console.log(i.info);
            }
        }
    }
}
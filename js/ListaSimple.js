class ListaSimple {
    constructor() {
        this.tamaño = 0;
        this.origen = null;
    }

    add(pos, info) {
        if (pos == 0) {
            this.addFirst(info);
        } else if (pos == this.tamaño) {
            this.addLast(info);
        } else if (pos > 0 && pos < this.tamaño) {
            let nuevo = new Nodo(info);

            let anterior = this.origen;
            for (let i = 0; i < pos - 1; i++) {
                anterior = anterior.siguiente;
            }
            let actual = anterior.siguiente;

            anterior.siguiente = nuevo;
            nuevo.siguiente = actual;

            this.tamaño++;
        } else {
            throw new Error("Fuera del rango");
        }
    }

    addFirst(info) {
        let nuevo = new Nodo(info);
        if (this.isEmpty()) {
            this.origen = nuevo;
        } else {
            nuevo.siguiente = this.origen;
            this.origen = nuevo;
        }
        this.tamaño++;
    }

    addLast(info) {
        let nuevo = new Nodo(info);
        if (this.isEmpty()) {
            this.origen = nuevo;
        } else {
            let aux = this.origen;
            while (aux.siguiente != null) {
                aux = aux.siguiente;
            }
            aux.siguiente = nuevo;
        }
        this.tamaño++;
    }

    remove(pos) {
        if (pos == 0) {
            this.removeFirst();
        } else if (pos == this.tamaño - 1) {
            this.removeLast();
        } else if (pos > 0 && pos < (this.tamaño - 1)) {
            let anterior = this.origen;
            for (let i = 0; i < pos - 1; i++) {
                anterior = anterior.siguiente;
            }
            anterior.siguiente = anterior.siguiente.siguiente;
            this.tamaño--;
        } else {
            throw new Error("Fuera del rango");
        }
    }

    removeFirst() {
        if (!this.isEmpty()) {
            this.origen = this.origen.siguiente;
            this.tamaño--;
        } else {
            throw new Error("Lista vacía");
        }
    }

    removeLast() {
        if (!this.isEmpty()) {
            if (this.tamaño == 1) {
                this.origen = null;
            } else {
                let aux = this.origen;
                while (aux.siguiente.siguiente != null) {
                    aux = aux.siguiente;
                }
                aux.siguiente = null;
            }
            this.tamaño--;
        } else {
            throw new Error("Lista vacía");
        }
    }

    set(pos, info) {
        if (pos > (this.tamaño - 1) || pos < 0) {
            throw new Error("Fuera del rango");
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

    iterator() {
        return this.origen;
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
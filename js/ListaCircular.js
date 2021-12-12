class ListaCircular {
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

            let anterior = this.origen.siguiente;
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
        if (this.isEmpty()) {
            this.origen = new Nodo(info);
            this.origen.siguiente = this.origen;
        } else {
            let nuevo = new Nodo(info);

            nuevo.siguiente = this.origen.siguiente;
            this.origen.siguiente = nuevo;
        }
        this.tamaño++;
    }

    addLast(info) {
        if (this.isEmpty()) {
            this.origen = new Nodo(info);
            this.origen.siguiente = this.origen;
        } else {
            let nuevo = new Nodo(info);

            nuevo.siguiente = this.origen.siguiente;
            this.origen.siguiente = nuevo;

            this.origen = nuevo;
        }
        this.tamaño++;
    }

    remove(pos) {
        if (pos == 0) {
            this.removeFirst();
        } else if (pos == this.tamaño - 1) {
            this.removeLast();
        } else if (pos > 0 && pos < this.tamaño) {
            let anterior = this.origen.siguiente;
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
        if (this.isEmpty()) {
            throw new Error("Lista vacía");
        } else {
            if (this.tamaño == 1) {
                this.origen = null;
            } else {
                this.origen.siguiente = this.origen.siguiente.siguiente;
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
            } else {
                let anterior = this.origen.siguiente;
                while (anterior.siguiente != this.origen) {
                    anterior = anterior.siguiente;
                }
                anterior.siguiente = this.origen.siguiente;
                this.origen = anterior;
            }
            this.tamaño--;
        }
    }

    set(pos, info) {
        if (this.isEmpty()) {
            throw new Error("Lista vacía");
        } else {
            if (pos >= 0 && pos < this.tamaño) {
                let aux = this.origen.siguiente;
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
                let aux = this.origen.siguiente;
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
        return this.isEmpty() ? null : this.origen.siguiente;
    }

    print() {
        if (this.isEmpty()) {
            throw new Error("Lista vacía");
        } else {
            let i = this.origen.siguiente
            do {
                console.log(i.info);
                i = i.siguiente;
            } while (i != this.origen.siguiente)
        }
    }
}
class ListaDoble {
    constructor() {
        this.tamaño = 0;
        this.origen = null;
        this.final = null;
    }

    add(pos, info) {
        let nuevo = new Nodo(info);
        if (pos == 0) {
            this.addFirst(info);
        } else if (pos == this.tamaño) {
            this.addLast(info);
        } else if (pos > 0 && pos < this.tamaño) {
            let count = 1;
            let aux = this.origen;
            while (count != pos) {
                aux = aux.siguiente;
                count++;
            }
            let despues = aux.siguiente;
            aux.siguiente = nuevo;
            nuevo.siguiente = despues;
            nuevo.anterior = aux;
            despues.siguiente = nuevo;
            this.tamaño++;
        }
    }

    addFirst(info){
        let nuevo = new Nodo(info);
        if (this.tamaño == 0) {
            this.origen = nuevo;
            this.final = nuevo;
        } else {
            let aux = this.origen;
            aux.anterior = nuevo;
            nuevo.siguiente = aux;
            this.origen = nuevo;
        }
        this.tamaño++;
    }

    addLast(info){
        let nuevo = new Nodo(info);
        if (this.tamaño == 0) {
            this.origen = nuevo;
            this.final = nuevo;
        } else {
            let aux = this.origen;
            aux.siguiente = nuevo;
            nuevo.anterior = aux;
            this.final = nuevo;
        }
        this.tamaño++;
    }

    remove(pos) {
        if (pos == 0) {
            this.removeFirst();
        } else if (pos == this.tamaño - 1) {
            this.removeLast();
        } else if (pos > 0 && pos < this.tamaño) {
            let aux = this.origen;
            let count = 0;
            while (count != pos) {
                aux = aux.siguiente;
                count++;
            }
            aux.anterior.siguiente = aux.siguiente;
            aux.siguiente.anterior = aux.anterior;
            aux = null;
            this.tamaño--;
        }
    }

    removeFirst(){
        if (this.isEmpty()) {
            console.log("Lista vacia");
        } else {
            if (this.tamaño == 1) {
                this.removeFirst();
            } else {
                
                let aux = this.origen;
                this.origen = aux.siguiente;
                aux.siguiente = null;
                aux = null;
            }
            this.tamaño--;
        }
    }

    removeLast(){
        if (this.isEmpty()) {
            console.log("Lista vacía");
        } else {
            if (this.tamaño == 1) {
                this.removeFirst();
            } else {
                let aux = this.final;
                this.final = aux.anterior;
                this.final.siguiente = null;
                aux = null;
                this.tamaño--;
            }
        }
    }

    set(pos, info) {
        let nuevo = new Nodo(info);
        if (this.isEmpty()) {
            console.log("Lista Vacia");
        } else {
            if (pos == 0) {
                let aux = this.origen;
                nuevo.siguiente = aux.siguiente;
                this.origen = nuevo;
                aux.siguiente = null;
                aux = null;
            } else if (pos > 0 && pos < this.tamaño) {
                let aux = this.origen;
                let count = 0;
                while (count != pos) {
                    aux = aux.siguiente;
                    count++;
                }
                nuevo.anterior = aux.anterior;
                nuevo.siguiente = aux.siguiente;
                aux.anterior.siguiente  = nuevo;
                if (aux.siguiente != null) {
                    aux.siguiente.anterior = nuevo;
                }
                aux.anterior = null;
                aux.siguiente = null;
                aux = null;
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
            while (posicion != pos) {
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
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
        } else if (pos > 0 && pos < this.length) {
            let count = 1;
            let aux = this.iteratorFirst();
            while (count != pos) {
                aux = aux.siguiente;
                count++;
            }
            let despues = aux.siguiente;
            aux.setSiguiente(nuevo);
            nuevo.setSiguiente(despues);
            nuevo.setAnterior(aux);
            despues.setAnterior(nuevo);
            this.tamaño++;
        }
    }

    addFirst(info){
        let nuevo = new Nodo(info);
        if (this.size() == 0) {
            this.origen = nuevo;
            this.final = nuevo;
        } else {
            let aux = this.origen;
            aux.setAnterior(nuevo);
            nuevo.setSiguiente(aux);
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
            aux.setSiguiente(nuevo);
            nuevo.setAnterior(aux);
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
            aux.anterior.setSiguiente(aux.siguiente);
            aux.siguiente.setAnterior(aux.anterior);
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
                aux.setSiguiente(null);
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
                this.final.setSiguiente(null);
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
                nuevo.setSiguiente(aux.siguiente);
                this.origen = nuevo;
                aux.setSiguiente(null);
                aux = null;
            } else if (pos > 0 && pos < this.tamaño) {
                let aux = this.origen;
                let count = 0;
                while (count != pos) {
                    aux = aux.siguiente;
                    count++;
                }
                nuevo.setAnterior(aux.anterior);
                nuevo.setSiguiente(aux.siguiente);
                aux.anterior.setSiguiente(nuevo);
                if (aux.siguiente != null) {
                    aux.siguiente.setAnterior(nuevo);
                }
                aux.setAnterior(null);
                aux.setSiguiente(null);
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
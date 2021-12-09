class ListaSimple {
    constructor() {
        this.tamaño = 0;
        this.origen = null;
    }

    add(pos, info) {
        
    }

    addFirst(info){
        let nuevo = new Nodo(info);
        if (this.isEmpty()) {
            this.origen = nuevo;
        } else {
            let temp = this.origen;
            this.origen = nuevo;
            this.origen.siguiente = temp;
        }
        this.tamaño++;
    }

    addLast(info){
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

    }

    removeFirst(){
        if (!this.isEmpty()) {
            this.origen = this.origen.siguiente;
            this.size--;
        } else {
            throw new Error("Lista vacía");
        }
    }

    removeLast(){
        if (!this.isEmpty()) {
            if (this.tamaño == 1) {
                origen = null;
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
        if (pos > 0 && pos < this.tamaño) {
            let aux = this.origen;
            for (let i = 0; i < pos; i++) {
                aux = aux.siguiente;
            }
            aux.info = info;
        } else {
            throw new Error("Fuera del rango");
        }
    }

    get(pos) {
        if (pos > 0 && pos < this.tamaño) {
            let aux = this.origen;
            for (let i = 0; i < pos; i++) {
                aux = aux.siguiente;
            }
            return aux;
        } else {
            throw new Error("Fuera del rango");
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
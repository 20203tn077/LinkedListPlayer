class ListaCircular {
    constructor() {
        this.tamaño = 0;
        this.origen = null;
    }

    add(pos, info) {

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
            aux.setSiguiente(nuevo);
            nuevo.setSiguiente(this.origen);
        }
        this.origen = nuevo;
        console.log("origen: " + this.origen)
        this.tamaño++;
    }

    // Pendiente por error
    addLast(info) {
          let nuevo = new Nodo(info);
        if (this.isEmpty()) {
            this.addFirst(info);
        } else {
            let aux = this.origen.siguiente;
            while (aux.siguiente != this.origen) {
                aux = aux.siguiente;   
            }
            aux.setSiguiente(nuevo);
            nuevo.setSiguiente(this.origen);
        }
        this.tamaño++;
    }

    remove(pos) {

    }

    removeFirst() {
        if (this.isEmpty()) {
            console.log("Lista vacia");
        } else {
            let aux = this.origen;
            while (aux.siguiente != this.origen) {
                aux = aux.siguiente;
            }
            let eliminar = this.origen;
            this.origen = eliminar.siguiente;
            eliminar.setSiguiente(null);
            eliminar = null;
            aux.setSiguiente(this.origen);
            this.tamaño--;
        }
    }

    removeLast() {

    }

    set(pos, info) {

    }

    get(pos) {

    }

    isEmpty() {
      return this.origen == null;
    }

    size() {

    }

    iterator() {

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
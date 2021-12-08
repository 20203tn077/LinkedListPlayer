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
        this.size++;
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
        this.size++;
    }

    remove(pos) {

    }

    removeFirst(){

    }

    removeLast(){

    }

    set(pos, info) {

    }

    get(pos) {

    }

    isEmpty() {

    }

    size() {

    }

    iterator() {

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
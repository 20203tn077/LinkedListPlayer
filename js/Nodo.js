class Nodo {
    constructor(info) {
        this.info = info;
        this.siguiente = null;
        this.anterior = null;
    }
    setSiguiente(siguiente) {
        this.siguiente = siguiente;
    }

    setAnterior(anterior) {
        this.anterior = anterior;
    }
    
}
var lista = new ListaSimple;
var listaDoble = new ListaDoble;
var listaCircular = new ListaCircular;
console.log("hola");
console.log("hola");
lista.addFirst("3");
lista.addFirst("2");
lista.addFirst("1");
lista.addLast("4");
lista.addLast("5");
lista.add(2,"6");
lista.remove(1)
lista.print();
console.log("------------------------------");
listaDoble.addLast("6");
listaDoble.addLast("7");
listaDoble.addFirst("1");
listaDoble.addFirst("2");
listaDoble.addFirst("3");
listaDoble.addFirst("4");
listaDoble.addFirst("5");
listaDoble.set(2, "8")
listaDoble.print();

console.log("------------------------------");
listaCircular.addLast("6");
listaCircular.addLast("7");
listaCircular.addFirst("1");
listaCircular.addFirst("2");
listaCircular.addFirst("3");
listaCircular.addFirst("4");
listaCircular.addFirst("5");
listaCircular.print();
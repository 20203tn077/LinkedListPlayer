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
console.log("tamaño lista: " + lista.size())
lista.add(2,"6");
console.log("tamaño lista: " + lista.size())
lista.remove(1);
lista.removeFirst();
lista.removeLast();
console.log("tamaño lista: " + lista.size())
lista.print();
console.log("------------------------------");
listaDoble.addLast("6");
listaDoble.addLast("7");
listaDoble.addFirst("1");
listaDoble.addFirst("2");
listaDoble.addFirst("3");
listaDoble.addFirst("4");
listaDoble.addFirst("5");
console.log("tamaño lista: " + listaDoble.size())
listaDoble.set(3, "8")
listaDoble.remove(2);
console.log("tamaño lista: " + listaDoble.size())
listaDoble.removeFirst();
listaDoble.removeLast();
console.log("tamaño lista: " + listaDoble.size())
listaDoble.addLast("10");
listaDoble.addFirst("12");
console.log("tamaño lista: " + listaDoble.size())
listaDoble.print();

console.log("------------------------------");
listaCircular.addLast("6");
listaCircular.addLast("7");
listaCircular.addFirst("1");
listaCircular.addFirst("2");
listaCircular.addFirst("3");
listaCircular.addFirst("4");
listaCircular.addFirst("5");
listaCircular.add(0, "8");
listaCircular.add(3, "9");
listaCircular.add(9, "10")
console.log("tamaño lista: " + listaCircular.size());
listaCircular.set(10, "15");
listaCircular.remove(0);
listaCircular.remove(8);
console.log("tamaño lista despues del remove: " + listaCircular.size());

listaCircular.print();
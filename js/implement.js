const lista = new LinkedList();
let usuarios


const createList = () => {
  const firstNodo = document.querySelector("#firstNodo").value
  if (firstNodo.trim() == "") {
    return
  }

  usuarios = lista.init(firstNodo)

  lista.print(usuarios)
}

const addNodo = () => {
  const inputNodo = document.querySelector("#nodo")
  if (inputNodo.value.trim() == "" || !usuarios) {
    return
  }
  
  lista.add(new Nodo(inputNodo.value, null))
  lista.print(usuarios)

  inputNodo.value = ""
}

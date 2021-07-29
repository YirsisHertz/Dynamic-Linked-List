const lista = new LinkedList();
let usuarios;

const createList = () => {
  const firstNodo = document.querySelector("#firstNodo").value;
  if (firstNodo.trim() == "") {
    return;
  }

  usuarios = lista.init(firstNodo);

  lista.print(usuarios);
};

const addNodo = () => {
  const inputNodo = document.querySelector("#nodo");
  if (inputNodo.value.trim() == "" || !usuarios) return;

  lista.add(new Nodo(inputNodo.value, null));
  lista.print(usuarios);

  inputNodo.value = "";
};

const insertNodo = () => {
  const positionInsert = document.querySelector("#positionInsert");
  const valueInsert = document.querySelector("#valueInsert");

  if (
    positionInsert.value.trim() == "" ||
    valueInsert.value.trim() == "" ||
    !usuarios
  )
    return;

  lista.insert(
    parseInt(positionInsert.value),
    new Nodo(valueInsert.value, null)
  );
  lista.print(usuarios);

  positionInsert.value = "";
  valueInsert.value = "";
};

const deleteNodo = () => {
  const positionDelete = document.querySelector("#positionDelete");
  if (positionDelete.value.trim() == "" || !usuarios) return;

  lista.delete(parseInt(positionDelete.value));
  lista.print(usuarios);

  positionDelete.value = "";
};

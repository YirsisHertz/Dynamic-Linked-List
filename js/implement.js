const error = document.querySelector("#error");
const lista = new LinkedList();
let usuarios;

const createList = () => {
  const firstNodo = document.querySelector("#firstNodo").value;
  error.style.display = "none";

  if (firstNodo.trim() == "") {
    error.style.display = "block";
    error.innerHTML = "Debes ingresar un dato";
    return;
  }

  usuarios = lista.init(firstNodo);

  lista.print(usuarios);
};

const addNodo = () => {
  error.style.display = "none";
  const inputNodo = document.querySelector("#nodo");

  if (inputNodo.value.trim() == "" || !usuarios) {
    error.style.display = "block";
    error.innerHTML = "Debes ingresar un dato valido en una lista valida";
    return;
  }

  lista.add(new Nodo(inputNodo.value, null));
  lista.print(usuarios);

  inputNodo.value = "";
};

const insertNodo = () => {
  const positionInsert = document.querySelector("#positionInsert");
  const valueInsert = document.querySelector("#valueInsert");
  error.style.display = "none";

  if (
    positionInsert.value.trim() == "" ||
    valueInsert.value.trim() == "" ||
    !usuarios
  ) {
    error.style.display = "block";
    error.innerHTML = "Debes agregar un dato valido ";
    return;
  }

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
  error.style.display = "none";

  if (positionDelete.value.trim() == "" || !usuarios) {
    error.style.display = "block";
    error.innerHTML = "Debes borrar un indice valido";
    return;
  }

  if (positionDelete.value == "0") {
    error.style.display = "block";
    error.innerHTML =
      "Esto podria eliminar la lista completa y no se recomienda";
    return;
  }

  lista.delete(parseInt(positionDelete.value));
  lista.print(usuarios);

  positionDelete.value = "";
};

class LinkedList {
  init(dato) {
    this.head = new Nodo(null, null);
    this.tail = new Nodo(dato, null);

    this.head.enlace = this.tail;

    return this.head;
  }

  print(nodo) {
    let puntero = nodo;
    let salida = "";

    while (puntero) {
      const dato = puntero.getDato();

      salida += `<span class="mx-1 fw-bold fs-3">  
        <span class=" nodo bg-info">${dato ? dato : ""}</span>
        <span class="animate__animated  animate__slideInUp  bg-dark text-white">
          <i class="bi bi-arrow-right"></i>
        </span>
      </span>`;
      puntero = puntero.enlace;
    }
    salida += `<span class="animate__animated  animate__zoomIn fs-3 bg-dark text-white">
          <i class="bi bi-dash-circle"></i>
        </span>`;

    document.querySelector("#datos").innerHTML = salida;
  }

  add(newNodo) {
    this.tail.enlace = newNodo;
    this.tail = newNodo;
  }

  insert(position, newNodo) {
    let puntero = this.head;
    let positionActual = 0;

    while (puntero.enlace && positionActual < position - 1) {
      puntero = puntero.enlace;
      positionActual++;
    }

    newNodo.enlace = puntero.enlace;
    puntero.enlace = newNodo;
  }

  delete(position) {
    let puntero = this.head;
    let positionActual = 0;

    while (puntero.enlace && positionActual < position - 1) {
      puntero = puntero.enlace;
      positionActual++;
    }

    let temporal = puntero.enlace;
    puntero.enlace = puntero.enlace.enlace;
    temporal.enlace = null;
  }
}

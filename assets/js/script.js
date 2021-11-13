var curso1 = [
  {
    nombre: "Andrés Ávila",
    calificaciones: [4.5, 6.5, 5.2, 6.8],
  },
  {
    nombre: "Fernanda Bustos",
    calificaciones: [7.0, 5.8, 6.3, 6.7],
  },
  {
    nombre: "Mauricio Cortés",
    calificaciones: [5.2, 5.3, 5.0, 5.7],
  },
  {
    nombre: "Karla Donoso",
    calificaciones: [4.3, 3.7, 4.8, 4.2],
  },
  {
    nombre: "Tomás Ercilla",
    calificaciones: [5.9, 6.2, 6.3, 6.5],
  },
  {
    nombre: "Daniela Fernández",
    calificaciones: [4.5, 4.7, 4.9, 5.1],
  },
  {
    nombre: "Sergio Garrido",
    calificaciones: [2.1, 3.4, 2.8, 1.5],
  },
  {
    nombre: "Pamela Herrera",
    calificaciones: [5.6, 5.9, 6.1, 5.7],
  },
  {
    nombre: "Fernando Inostroza",
    calificaciones: [6.8, 6.9, 7.0, 6.9],
  },
  {
    nombre: "Laura Jorquera",
    calificaciones: [5.6, 5.3, 6.2, 5.8],
  },
  {
    nombre: "Bryan Kelly",
    calificaciones: [5.6, 4.6, 3.9, 6.1],
  },
  {
    nombre: "Pía Muñoz",
    calificaciones: [4.6, 4.8, 5.0, 4.3],
  },
  {
    nombre: "Leonardo Navea",
    calificaciones: [7.0, 6.8, 5.9, 6.5],
  },
  {
    nombre: "Sandra Ortiz",
    calificaciones: [5.4, 5.7, 5.3, 5.2],
  },
  {
    nombre: "Andrés Poblete",
    calificaciones: [6.5, 5.9, 6.3, 6.7],
  },
  {
    nombre: "Francisca Quiroga",
    calificaciones: [6.9, 6.8, 7.0, 6.9],
  },
  {
    nombre: "Osvaldo Rojas",
    calificaciones: [2.5, 3.5, 4.5, 5.5],
  },
  {
    nombre: "Eduardo Soto",
    calificaciones: [5.9, 6.3, 4.9, 5.4],
  },
  {
    nombre: "Rayén Toro",
    calificaciones: [4.3, 5.2, 4.9, 5.6],
  },
  {
    nombre: "Germán Uturriaga",
    calificaciones: [3.6, 4.2, 4.5, 3.9],
  },
  {
    nombre: "Javiera Véliz",
    calificaciones: [2.5, 1.9, 4.2, 3.5],
  },
  {
    nombre: "Paola Yáñez",
    calificaciones: [4.5, 3.2, 5.6, 4.2],
  },
  {
    nombre: "Ricardo Zapata",
    calificaciones: [4.5, 6.7, 5.4, 6.2],
  },
];

function cargar() {
  document.getElementById("tabla").innerHTML = crearTabla(curso1);
}

let crearTabla = function (personas) {

  let stringImagen= "<img src=\"assets/img/tuimagen.jpg\">"
  let stringTabla =
    "<tr><th>Número</th><th>Nombre Completo</th><th>Nota 1</th><th>Nota 2</th><th>Nota 3</th><th>Nota 4</th><th>Nota promedio</th></tr>";
  for (let persona of personas) {
    let fila = "<tr> <td>";
    fila += personas.indexOf(persona) + 1;
    fila += "</td>";

    fila += "<td>";
    fila += persona.nombre;
    fila += "</td>";

    if (persona.calificaciones[0] < 4.0) {
      fila += '<td class="reprobado">';
      fila += persona.calificaciones[0];
      fila += "</td>";
    } else {
      fila += "<td>";
      fila += persona.calificaciones[0];
      fila += "</td>";
    }

    if (persona.calificaciones[1] < 4.0) {
      fila += '<td class="reprobado">';
      fila += persona.calificaciones[1];
      fila += "</td>";
    } else {
      fila += "<td>";
      fila += persona.calificaciones[1];
      fila += "</td>";
    }

    if (persona.calificaciones[2] < 4.0) {
      fila += '<td class="reprobado">';
      fila += persona.calificaciones[2];
      fila += "</td>";
    } else {
      fila += "<td>";
      fila += persona.calificaciones[2];
      fila += "</td>";
    }

    if (persona.calificaciones[3] < 4.0) {
      fila += '<td class="reprobado">';
      fila += persona.calificaciones[3];
      fila += "</td>";
    } else {
      fila += "<td>";
      fila += persona.calificaciones[3];
      fila += "</td>";
    }

    let prom = (
      (persona.calificaciones[0] +
        persona.calificaciones[1] +
        persona.calificaciones[2] +
        persona.calificaciones[3]) /
      4
    ).toFixed(1);

    if (prom < 4.0) {
        fila += '<td class="reprobado">';
        fila += prom;
        fila += "</td>";
      } else {
        fila += "<td>";
        fila += prom;
        fila += "</td>";
      }
    fila += "</tr>";

    stringTabla += fila;
    console.log(stringTabla);
  }
  return stringTabla;
};

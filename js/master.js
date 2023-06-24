/*master - style - styles -estilos - index - main -app*/
 let botonSel = document.getElementById('botonSel');
 botonSel.addEventListener('click', function(){
    Swal.fire(
        'Bienvenid@s',
        'a nuestro sitio web',
        'success'
      )
 }) 
 /*Crear un array de objetos literales*/
let caracteristicas = [
  {
    codigo: '01',
    nombre: 'Sel',
    descripcion: 'Vehículo para toda la familia',
    precio: '9.800.000'
  },
  {
    codigo: '02',
    nombre: 'Titanium',
    descripcion: 'Vehículo para toda la familia Sedan',
    precio: '10.800.000'
  },
  {
    codigo: '03',
    nombre: 'Explorer',
    descripcion: 'Camioneta para toda la familia',
    precio: '12.800.000'
  }
];
//Llenando la tabla con los datos de forma dinámica
let cuerpoTabla = document.getElementById('cuerpoTabla');
//Crear un ciclo iterativo - para recorrer el array de objetos
for(let i = 0; i < caracteristicas.length;i++){
  cuerpoTabla.innerHTML+= `
    <tr class='formatoCeldas'>
      <td>${caracteristicas[i].codigo} </td>
      <td>${caracteristicas[i].nombre} </td>
      <td>${caracteristicas[i].descripcion} </td>
      <td>$${caracteristicas[i].precio} </td>
    </tr>
  `;
}

//Array con objetos de paises
//Enviado por Nestor
let paises = [
  {
      id: '01',
      pais: 'Colombia'
  },
  {
      id: '02',
      pais: 'Venezuela'
  },
  {
      id: '03',
      pais: 'Argentina'
  },
  {
      id: '04',
      pais: 'Chile'
  },
  {
    id:'05',
    pais: 'Uruguay'
  }
];

let pais = document.getElementById('pais');

for(let i=0; i < paises.length; i++){
  pais.innerHTML+= `<option value="${paises[i].id}">${paises[i].pais} </option>`;
}

/*=== Trabajando con transiciones a nuestros elementos del HTML===*/
window.addEventListener('scroll', function(){
  let encabezado = document.getElementById('encabezado');
  encabezado.classList.toggle('animar', window.scrollY > 0);
})


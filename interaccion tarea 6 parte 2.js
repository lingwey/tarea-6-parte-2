/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

document.querySelector('#agregar').onclick = function(event){
    crearIntegrante();
    mostrarResetear();
    mostrarCalcular();
    esconderTitulos ();
    event.preventDefault();
}



function crearIntegrante (){
    const $div = document.createElement('div');
    $div.className = 'familiar';

    const $label = document.createElement('label');
    $label.textContent = 'ingrese el salario anual';

    const $input = document.createElement('input');
    $input.type = 'number';

    $div.appendChild($label);
    $div.appendChild($input)

    const $ingresoSueldo = document.querySelector('#ingreso-sueldos');
    $ingresoSueldo.appendChild($div);

}
document.querySelector('#calcular').onclick = function(event){
    const sueldos = obtenerSueldos ();
    mostrarSueldos ("mayor", mayoSalario(sueldos));
    mostrarSueldos ("menor", menorSalario(sueldos));
    mostrarSueldos ("promedioA", salarioAnual(sueldos));
    mostrarSueldos ("promedioM", salarioMensual(sueldos));
    esconderCalcular();
    esconderAgregar();
    mostrarResultados ();
    event.preventDefault();
}

document.querySelector('#reiniciar').onclick = reiniciar();

function reiniciar (){
    mostrarAgregar();
    esconderResultado ();
    esconderCalcular();
    esconderResetear();
    mostrarTitulo ();
    borrarTodo ();
}

function mostrarResetear (){
    document.querySelector('#reiniciar').className= '';
}

function mostrarCalcular (){
    document.querySelector('#calcular').className = '';
}

function esconderResetear (){
    document.querySelector('#reiniciar').className = 'escondido';
}

function esconderCalcular (){
    document.querySelector('#calcular').className = 'escondido';
}

function mostrarResultados (){
    document.querySelector('#resultados').className = '';
}

function esconderResultado (){
    document.querySelector('#resultados').className = 'escondido';
}

function esconderAgregar (){
    document.querySelector('#agregar').className = 'escondido';
}

function mostrarAgregar (){
    document.querySelector('#agregar').className = '';
}

function borrarTodo (){
    const $integrantes = document.querySelectorAll('.familiar');
    for (let i = 0; i < $integrantes.length; i++){
        $integrantes[i].remove();
    }
}

function obtenerSueldos (){
    const $sueldos = document.querySelectorAll('.familiar input');
    const sueldos = [];
    for (let i =0; i < $sueldos.length; i++){
        sueldos.push(Number($sueldos[i].value));
    }
    return sueldos;
}

function mostrarSueldos (tipo, sueldo){
    document.querySelector(`#${tipo}`).textContent = sueldo;
}

function esconderTitulos (){
    document.querySelector('#titulo').className = 'escondido';
    document.querySelector('#subtitulo').className = '';
}

function mostrarTitulo (){
    document.querySelector('#titulo').className = '';
    document.querySelector('#subtitulo').className ='escondido';
}

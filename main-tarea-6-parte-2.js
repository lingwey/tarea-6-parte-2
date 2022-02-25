document.querySelector('#agregar').onclick = function(event){
    event.preventDefault();
    crearIntegrante();
    mostrarBotonResetear();
    mostrarBotonCalcular();
    esconderTitulos ();
}



function crearIntegrante (){
    const $div = document.createElement('div');
    $div.className = 'familiar';

    const $label = document.createElement('label');
    $label.className = 'input-group-text';
    $label.textContent = 'ingrese el salario anual';

    const $input = document.createElement('input');
    $input.className = 'form-control';
    $input.type = 'number';

    $div.appendChild($label);
    $div.appendChild($input)

    const $ingresoSueldo = document.querySelector('#ingreso-sueldos');
    $ingresoSueldo.appendChild($div);

}
document.querySelector('#calcular').onclick = function(event){
    event.preventDefault();
   
    const sueldos = obtenerSueldos ();
    mostrarSueldos ("mayor", obtenerMayoSalario(sueldos));
    mostrarSueldos ("menor", obtenerMenorSalario(sueldos));
    mostrarSueldos ("promedioA", obtenerSalarioAnual(sueldos));
    mostrarSueldos ("promedioM", obtenerSalarioMensual(sueldos));
    esconderBotonCalcular();
    esconderBotonAgregar();
    mostrarResultados ();
    limpiarMarcadorErrores();
    
}

document.querySelector('#reiniciar').onclick = reiniciar();

function reiniciar (){
    mostrarBotonAgregar();
    esconderResultado ();
    esconderBotonCalcular();
    esconderBotonResetear();
    mostrarTitulo ();
    borrarTodo ();
    limpiarMarcadorErrores();
}

function mostrarBotonResetear (){
    document.querySelector('#reiniciar').className= 'btn btn-outline-primary';
}

function mostrarBotonCalcular (){
    document.querySelector('#calcular').className = 'btn btn-outline-primary';
}

function esconderBotonResetear (){
    document.querySelector('#reiniciar').className = 'escondido';
}

function esconderBotonCalcular (){
    document.querySelector('#calcular').className = 'escondido';
}

function mostrarResultados (){
    document.querySelector('#resultados').className = '';
}

function esconderResultado (){
    document.querySelector('#resultados').className = 'escondido';
}

function esconderBotonAgregar (){
    document.querySelector('#agregar').className = 'escondido';
}

function mostrarBotonAgregar (){
    document.querySelector('#agregar').className = 'btn btn-outline-primary';
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
    const revisarIngresoSueldos = validarIngresoSueldos(sueldos);
    const errores = {
        validarSueldos : revisarIngresoSueldos
    }
    const validar = manejarErrores(errores) === 0;
    if (validar){
        return sueldos;
    }
}

function mostrarSueldos (tipo, sueldo){
    document.querySelector(`#${tipo}`).textContent = sueldo;
}

function esconderTitulos (){
    document.querySelector('#titulo').className = 'escondido';
    document.querySelector('#subtitulo').className = 'fs-4';
}

function mostrarTitulo (){
    document.querySelector('#titulo').className = 'fs-4';
    document.querySelector('#subtitulo').className ='escondido';
}

function validarIngresoSueldos (revisarIngresoSueldos){
    for (let i = 0; i < revisarIngresoSueldos.length; i++){
        if (revisarIngresoSueldos[i] === 0){
            return 'deve ingresar un sueldo';
            break;
        }
        if (revisarIngresoSueldos[i] < 0){
            return 'el sueldo no puede ser negativo';
            break;
        }
        if (!/^[0-9]+$/i.test(revisarIngresoSueldos[i])){
            return 'solo se puede ingresar numeros enteros'
            break
        }
    }
    return '';
}

function manejarErrores (errores){
    const llave = Object.keys(errores);
    const mostrarError = document.querySelector('#mostrar-errores');
    let contadorErrores = 0;

    llave.forEach(function(llave){
        const error = errores[llave];

        if(error){
            contadorErrores ++;
            $error = document.createElement('li');
            $error.textContent = error;
            $error.className = 'error alert alert-danger';
            mostrarError.appendChild($error);
        }
    })
    return contadorErrores;
}


function limpiarMarcadorErrores (){
    const marcadorErrores = document.querySelectorAll('.error');
    for (let i = 0; i < marcadorErrores.length; i++){
        marcadorErrores[i].remove()
    }
}


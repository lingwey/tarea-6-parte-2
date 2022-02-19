function provarValidaciones(){
    console.assert(
        validarIngresoSueldos(0) === 'deve ingresar un sueldo',
        'fallo la validacion de si ingreso o no un numero'
    )
    console.assert(
        validarIngresoSueldos(-1) === 'el sueldo no puede ser negativo',
        'fallo la validacion de numero negativo'
    )
    console.assert(
        validarIngresoSueldos('.,.,.,.,,.') === 'solo se puede ingresar numeros enteros',
        'fallo la validacion de numero esnteros y caracteres'
    )
    console.assert(
        validarIngresoSueldos(12) === '',
        'fallo la validacion con un numero valido'
    )
}

provarValidaciones();

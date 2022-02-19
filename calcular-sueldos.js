function obtenerSalarioMensual (salario){
    let contador = 0;
    for (let i = 0; i < salario.length; i++){
        contador += salario[i]
    }
    const mensual = contador / 12;
    return mensual / salario.length;
}

function obtenerSalarioAnual (salario){
    let contador = 0;
    for (let i = 0; i < salario.length; i++){
        contador += salario[i]
    }
    return contador / salario.length;
}


function obtenerMayoSalario (salario){
    let mayor = salario[0]
    for (let i = 0; i < salario.length; i++){
        if (mayor < salario[i]){
            mayor = salario[i];
        }
    }
    return mayor;
}

function obtenerMenorSalario (salario){
    let menor = salario[0];
    for (let i = 0; i < salario.length; i++){
        if (menor > salario[i]){
            menor = salario[i];
        }
    }
    return menor;
}



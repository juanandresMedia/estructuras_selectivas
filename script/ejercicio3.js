let nombre, salario, deducciones, bonificaciones, nombre2, salario2, deducciones2, bonificaciones2

//asignar informacion

nombre = prompt("ingrese su nombre del trabajador 1");
nombre2 = prompt("ingrese su nombre del trabajador 2");
salario = Number(prompt("ingrese el salario de empleado 1"));
salario2 = Number(prompt("ingrese el salario de empleado 2"));
deducciones = Number(prompt("ingrese las deducciones del trabajador 1"));
deducciones2 = Number(prompt("ingrese las deducciones del trabajador 2"));
bonificaciones = Number(prompt("ingrese las bonificaciones del trabajador 1"));
bonificaciones2 = Number(prompt("ingrese las bonificaciones del trabajador 2"));

//proceso
sf=(salario-deducciones)+bonificaciones
sf2=(salario2-deducciones2)+bonificaciones2

if (salario > salario2) {
    alert("el salario mayor es: " + nombre)
} else {
    alert("el salario mayor es: " + nombre2)
};

alert("nombre del empleado 1" + nombre);
alert("nombre del empleado 2" + nombre2);
alert("salario del empleado 1" + salario);
alert("salario del empleado 2" + salario2);
alert("deducciones del empleado 1" + deducciones);
alert("deducciones del empleado 2" + deducciones2);
alert("bonoficaciones del empleado 1" + bonificaciones);
alert("bonificaciones del empleado 2" + bonificaciones2);
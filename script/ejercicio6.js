let tipotrabajador,nombre,salarioneto,hdt,slb,dcn,bnf,h;

h=6000;

//asignamos informacion

nombre=prompt("ingrese el nombre del trabajador");
tipotrabajador=Number(prompt("ingrese tipo de trabajador (fijo=1 o temporal=2)"))
hdt=Number(prompt("ingrese horas de trabajo"));
dcn=Number(prompt("ingrese deduccines"));
bnf=Number(prompt("ingrese bonificaciones"))

// proceso

if (tipotrabajador==1){

    dcn=Number(prompt("ingrese deducciones"));
    bnf=Number(prompt("ingrese bonisicaciones"));
    slb = (hdt * h) - dcn;
    salarioneto = slb + bnf;
    alert("el nombre del empleado es:"+nombre)
    alert("sus deducciones son:"+dcn)
    alert("sus bonificaciones son:"+bnf)
    alert("su salario total es:"+salarioneto)
} else if (tipotrabajador == 2){

    salarioneto = hdt * h;
    alert("el nombre del empleado es:"+ nombre)
    alert("su salario total e:"+salarioneto)
}
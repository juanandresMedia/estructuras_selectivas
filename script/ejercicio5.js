let A,B,ruta,placa,nusuarios,total;

// asignar informacion

ruta=Number(prompt("ingrese la ruta de servicio(A=1 o B=2)"));
placa=(prompt("ingrese la placa del vehiculo"));
nusuarios=Number(prompt("ingrese el numero de pasajeros transportados"))

//proceso




if (ruta==1) {
    total=nusuarios*1200
} else 
if (ruta==2){
    total=nusuarios*1000
}

alert(total)

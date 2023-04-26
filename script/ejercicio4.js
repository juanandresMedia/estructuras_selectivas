let pasaje,placa,dinerototal,nusuarios,pasaje2,placa2,dinerototal2,nusuarios2;

// asignar informacion 

nusuarios=Number(prompt("ingrese el numero de pasajeros transportados"));
placa=(prompt("ingrese la placa del vehiculo"));
pasaje=Number(prompt("ingrese valor del pasaje"));
nusuarios2=Number(prompt("ingrese el numero de pasajeros transportados, bus 2"));
placa2=(prompt("ingrese la placa del vehiculo, bus 2"));
pasaje2=Number(prompt("ingrese valor del pasaje, bus 2"));

//proceso

dinerototal=pasaje*nusuarios;
dinerototal2=pasaje2*nusuarios2
if(dinerototal>dinerototal2){


    alert("la placa del que mas recaudo dinero:"+placa);
    alert("es total del dinero recogido es:"+dinerototal);

} else{
    alert("la placa del que mas recaudo dinero:(bus2)"+placa2);
alert("la placa del que mas recaudo dinero:(bus2)"+dinerototal2);
}

//imprimir


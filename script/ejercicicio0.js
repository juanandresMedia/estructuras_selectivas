let cantidad, descuento, monto, total;


cantidad = parseInt(prompt('ingrese cantidad'));

monto=cantidad*2000000
if (cantidad<10) {
    alert ('no tienes descuento')
} else 
if (cantidad >10 && cantidad <20) {
    descuento=monto*0.1
}
else if ( cantidad>= 20 && cantidad<30) 
{descuento=monto*0.30}
else if (cantidad >=30)
{descuento=monto*0.4}

total=monto-descuento
 alert ("el total de su compra es "+total
 )
